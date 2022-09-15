import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import styles from './profilepageStyling.module.css';
import ErrorModal from "../Components/UI/ErrorModal";
import LoadingSpinner from "../Components/UI/LoadingSpinner";
import { useHttpClient } from "../Components/hooks/httphook";

const pdf=async(file)=>{
    try {
      await axios
        .get(file, {
          responseType: "blob",
        })
        .then((response) => {
          //Create a Blob from the PDF Stream
          const file = new Blob([response.data], { type: "application/pdf" });
          //Build a URL from the file
          const fileURL = URL.createObjectURL(file);
          //Open the URL on new Window
           const pdfWindow = window.open();
           pdfWindow.location.href = fileURL;            
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      return { error };
    }
}

const ProfilePage=()=>{
    const[loading,error,sendRequest,clearError]=useHttpClient();
    const history=useHistory();
    const token=useSelector(state=>state.auth.token);
    const [files,setFiles]=useState([]);
    const [email,setEmail]=useState('');
    useEffect(()=>{
        const func=async()=>{
            try{
            const email=await sendRequest('http://localhost:3010/email','GET',null,{
                authorization:`Bearer ${token}`});
            setEmail(email.emailId);
            const file=await sendRequest('http://localhost:3010/filesbyemail','GET',null,{
                authorization:`Bearer ${token}`});
            setFiles(file);
            }catch(err){

            }
        }
        func();
    },[sendRequest,token]);
    const deleteFile=async(file)=>{
        try{
            await sendRequest(`http://localhost:3010/remove?file=${file}`,'DELETE',null,{
            authorization:`Bearer ${token}`});
            alert('File Deleted Successfully!');history.go(0);
        }catch(err){

        }
    }
    return(
    <div className="d-flex justify-content-center">
        {error&&<ErrorModal error={error} onClear={clearError}/>}
        {loading&&<div className='center'><LoadingSpinner asOverlay/></div>}
        <div className='shadow bg-white mt-4 p-4 col-lg-8 col-12'>
            <div className="mt-4 text-center">
                <i style={{fontSize: "70px"}} className={`${styles.profileIcon} fas fa-user-circle`}></i>
                <h3 className="mt-2" style={{fontStyle: "italic", fontWeight: "300" }}>{email}</h3>
            </div>
            <div className=" table-responsive-md">
                <table className="table table-striped table-bordered table-sm">
                    <caption style={{captionSide: "top", fontWeight: "400", fontSize: "2rem", color: "black"}}>Files Uploaded</caption>
                    <thead>
                        <tr >
                            <th scope="col">#</th>
                            <th scope="col">File</th>
                            <th scope="col">Course</th>
                            <th scope="col">Uploaded On</th>
                            <th scope="col">Remove File</th>
                        </tr>
                    </thead>
                    <tbody>
                    {files.map((file,ind)=>{
                    return(
                        
                            <tr key={Math.random().toString()}>
                                <th scope="row">{ind+1}</th>
                                <td style={{cursor:'pointer'}} onClick={pdf.bind(null,`http://localhost:3010/pdf?filePath=${file.filePath}`)}><a href='/profile'>{file.fileName}</a></td>
                                <td className=''>{file.subject}</td>
                                <td className=''>{file.uploadedOn.slice(0,10)}</td>
                                <td>  <button className="btn btn-primary" style={{backgroundColor:"#29539b", color: "white", borderWidth: "0px"}} onClick={deleteFile.bind(null,file.filePath)}><i class="fas fa-trash"></i> Delete</button></td>
                            </tr>      
                    )
                })}</tbody></table>
        
            </div>
       </div>
    </div>
    )
}
export default ProfilePage;