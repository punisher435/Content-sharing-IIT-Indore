import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Pdf from './pdf';
import { useHttpClient } from '../hooks/httphook';
import ErrorModal from '../UI/ErrorModal';
import LoadingSpinner from '../UI/LoadingSpinner';


const Files=()=>{
    const[loading,error,sendRequest,clearError]=useHttpClient();
    const location=useLocation();
    const query=new URLSearchParams(location.search);
    const subject=useParams().subject;
    const category=query.get('cat');
    const [filesPaths,setPaths]=useState([]);
    useEffect(()=>{
        const func=async()=>{
            try{
                const data=await sendRequest(`http://localhost:3010/files?cat=${category}&sub=${subject}`);
                setPaths(data);
            }catch(err){

            }
        }
        func();
    },[category,sendRequest,subject]);
    return(
        <div className='col-12'>
            {error&&<ErrorModal error={error} onClear={clearError}/>}
            {loading&&<div className='center'><LoadingSpinner asOverlay/></div>}
            <h1 className='text-center'>{subject}</h1>
            <h3>Uploaded {category}</h3>
            <div className='row'>
                {filesPaths.map((files)=><Pdf filename={files.fileName} date={files.uploadedOn} email={files.emailId} key={Math.random().toString()} file={`http://localhost:3010/pdf?filePath=${files.filePath}`}></Pdf>)}
            </div>
        </div>
    )
}
export default Files;