import { useCallback, useEffect, useRef, useState } from "react";

export const useHttpClient=()=>{
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState();
    const activeHttpRequests=useRef([]);

    const sendRequest=useCallback(async(url,method='GET',body=null,headers={})=>{
        setLoading(true);
        const httpAbort=new AbortController();
        activeHttpRequests.current.push(httpAbort);
        try{
            const response=await fetch(url,{
                method,
                headers,
                body,
                signal:httpAbort.signal
            });
            const responseData=await response.json();
            activeHttpRequests.current.filter(ctrl=>ctrl!=httpAbort);
            if(!response.ok){
                throw new Error(responseData.msg);
            }
            setLoading(false);
            return responseData;
        }catch(err){
            setError(err.message);
            setLoading(false);
            throw err;
        }
    },[]);
    const clearError=()=>{
        setError(false);
    }
    useEffect(()=>{
        return()=>{
            activeHttpRequests.current.forEach(element=>element.abort());
        }
    },[]);

    return[loading,error,sendRequest,clearError];
}