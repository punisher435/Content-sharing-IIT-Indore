import { useState,useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from './uploadFormStyling.module.css';
import { useHttpClient } from '../hooks/httphook';
import ErrorModal from '../UI/ErrorModal';
import LoadingSpinner from '../UI/LoadingSpinner';

const UploadForm=()=>{
    const[loading,error,sendRequest,clearError]=useHttpClient();
    const token=useSelector(state=>state.auth.token);
    const branchRef=useRef();
    const [success,setSuccess]=useState(null);
    const history=useHistory();
    const fileRef=useRef();
    const fileNameRef=useRef();
    const [branch,setBranch]=useState('null');
    const [subject,setSubject]=useState('null');
    const [filename,setFile]=useState(null);
    const typeRef=useRef();
    const subjectRef=useRef();
    const BranchChangeHandler=event=>{
        setBranch(branchRef.current.value);
    }
    const subjectHandler=()=>{
        setSubject(subjectRef.current.value);
    }
    const uploadHandler=async(event)=>{
        event.preventDefault();
        if(branch==='null'){
            alert('Please enter Branch');
            return;
        }else if(subject==='null'){
            alert('Please enter a subject');
            return;
        }else if(fileNameRef.current.value.trim()==""){
            alert('Please Enter an appropriate file name');
            return;
        }
        const fileName=fileNameRef.current.value;
        const file=fileRef.current.files;
        if(file.length===0){
            alert('Enter a File');
            return;
        }
        console.log(subject, file);
        const formData = new FormData();
        const category=typeRef.current.value;
        formData.append('subject', subject);
        formData.append('pdf-file', file[0]);
        formData.append('filename',fileName);
        formData.append('category',category);
        try{
            await sendRequest('http://localhost:3010/upload','POST',formData,{
                authorization:`Bearer ${token}`});
            alert("Uploaded Successfully");
            history.go(0);
        }catch(err){

        }
    }
    const fileHandler=(event)=>{
        if(event.target.files.length==0){
            setFile(null);
            return;
        }
        setFile(event.target.files[0].name);
    }
    return(
        
            <div className={`col-md-12 ${styles.newc}`}>
                {error&&<ErrorModal error={error} onClear={clearError}/>}
                {loading&&<div className='center'><LoadingSpinner asOverlay/></div>}
                <div className={`col-12 col-sm-12 col-md-6 col-lg-4 shadow ${styles.mainCard}`}>
                    <div className={`${styles.formHeading} p-3`}>
                        <h1>Upload Files <i className={`${styles.fileIcon} far fa-file`}></i> </h1>
                        <p>Upload your files by filling the form below<br/>Don't forget to read the instructions</p>
                    </div>
                    <div className={`${styles.formBox}`}>
                        {success&&<div className='text-center'>{success}</div>}
                        <form onSubmit={uploadHandler} className='d-flex flex-column justify-content-center' encType="multipart/form-data">
                        <label htmlFor="branchselect" className="mt-3" style={{lineHeight: "1px"}}>Select Branch</label>
                        <select ref={branchRef} defaultValue='null' onChange={BranchChangeHandler} id="branchSelect" className='mb-3 form-select'>
                            <option value='null'>None</option>
                            <option value="CS">CS</option>
                            <option value="M&C">M&C</option>
                            <option value="EE">EE</option>
                            <option value="ME">ME</option>
                        </select>
                        <label style={{lineHeight: "1px"}} className="mt-3">Select Subject</label>
                        {(branch==='null') && <select defaultValue='null' className='mb-3 form-select'><option>Select an appropriate branch first</option></select>}
                        
                        {branch==='CS'&&<select defaultValue='null' onChange={subjectHandler} ref={subjectRef} className='mb-3 form-select'>
                            <option value='null'>None</option>
                            <option value="CS101">CS101(Introduction to Computing)</option>
                            <option value="CS210">CS210(Digital Systems Design)</option>
                            <option value="CS220">CS220(Data Structures and Algorithms)</option>
                            <option value="CS221">CS221(Discrete Structures)</option>
                            <option value="CS230">CS230(Probability and Statistics for Computer Science)</option>
                            <option value="CS211">CS211(Computer Architecture)</option>
                            <option value="CS212">CS212(Computer Networks)</option>
                            <option value="CS222">CS222(Algorithm Design)</option>
                            <option value="CS300">CS300(Programming Language Paradigms)</option>
                            <option value="CS310">CS310(Operating Systems)</option>
                            <option value="CS320">CS320(Logic in Computer Science)</option>
                            <option value="CS330">CS330(Artificial Intelligence)</option>
                            <option value="CS331">CS331(Machine Learning)</option>
                            <option value="CS321">CS321(Theory of Computation)</option>
                            <option value="CS311">CS311(Compiler Design)</option>
                        </select>}
                        {branch==='ME'&&<select defaultValue='null' onChange={subjectHandler} ref={subjectRef} className='mb-3 form-select'>
                            <option value='null'>None</option>
                            <option value="ME101">ME101(Introduction to Manufacturing)</option>
                            <option value="ME102">ME102(Engineering Graphics and Introduction to Computer-Aided-Drawing)</option>
                            <option value="ME200">ME200(Thermodynamics)</option>
                            <option value="ME201">ME201(Fluid Mechanics)</option>
                            <option value="ME210">ME210(Mechanics of Materials)</option>
                            <option value="ME211">ME211(Solid Mechanics Lab)</option>
                            <option value="ME212">ME212(Machine drawing lab)</option>
                            <option value="ME220">ME220(Manufacturing Processes I)</option>
                            <option value="ME221">ME221(Mechanical Measurements & Metrology)</option>
                            <option value="ME222">ME222(Engineering Metallurgy)</option>
                            <option value="ME300">ME300(Applied Thermodynamics)</option>
                            <option value="ME310">ME310(Kinematics and Dynamics of Machines)</option>
                            <option value="ME320">ME320(Manufacturing Processes II)</option>
                            <option value="ME321">ME321(Manufacturing Processes Lab)</option>
                            <option value="ME301">ME301(Heat Transfer)</option>
                            <option value="ME311">ME311(Machine Design)</option>
                            <option value="ME322">ME322(Industrial Engineering and Operations research)</option>
                            <option value="ME323">ME323(Digital Manufacturing Lab)</option>
                        </select>}
                        {branch==='EE'&&<select defaultValue='null' onChange={subjectHandler} ref={subjectRef} className='mb-3 form-select'>
                            <option value='null' selected>None</option>
                            <option value="EE101">EE101(Introduction to Electrical and Electronics Engineering)</option>
                            <option value="EE231">EE231(Electronic Devices and Lab)</option>
                            <option value="EE232">EE232(Digital Circuits and Lab)</option>
                            <option value="EE201">EE201(Signals and Systems)</option>
                            <option value="EE221">EE221(Probability and Random Processes)</option>
                            <option value="EE222">EE222(Electromagnetic Waves)</option>
                            <option value="EE223">EE223(Analog Communication Systems)</option>
                            <option value="EE233">EE233(Analog Circuits and Lab)</option>
                            <option value="EE211">EE211(Electrical Machines and Lab)</option>
                            <option value="EE321">EE321(Digital Communication Techniques and Lab)</option>
                            <option value="EE311">EE311(Power Electronics and Lab)</option>
                            <option value="EE301">EE301(Control Systems and Lab)</option>
                            <option value="EE322">EE322(Digital Signal Processing and Lab)</option>
                            <option value="EE312">EE312(Power Systems)</option>
                            <option value="EE313">EE313(Electric Drives)</option>
                        </select>}
                        {branch==='M&C'&&<select defaultValue='null' onChange={subjectHandler} ref={subjectRef} className='mb-3 form-select'>
                            <option value='null'>None</option>
                            <option value="MTH101">MTH101(Calculus)</option>
                            <option value="MTH1021">MTH1021(Basic Linear Algebra)</option>
                            <option value="MTH1022">MTH1022(Ordinary Differential Equations)</option>
                            <option value="MTH211">MTH211(Real Analysis)</option>
                            <option value="MTH221">MTH221(Discrete Mathematics)</option>
                            <option value="MTH222">MTH222(Linear Algebra and Applications)</option>
                            <option value="MTH212">MTH212(Multivariate Calculus)</option>
                            <option value="MTH223">MTH223(Algebra)</option>
                            <option value="MTH213">MTH213(Numerical Analysis)</option>
                            <option value="MTH332">MTH332(Stochastic Processes)</option>
                            <option value="MTH3141">MTH3141(Differential Equations I)</option>
                            <option value="MTH3142">MTH3142(Differential Equations II)</option>
                            <option value="MTH3151">MTH3151(Complex Analysis I)</option>
                            <option value="MTH3152">MTH3152(Complex Analysis II)</option>
                            <option value="MTH316">MTH316(Measure and Probability)</option>
                            <option value="MTH317">MTH317(Topology)</option>
                        </select>}
                        <label style={{lineHeight: "1px"}} className="mt-3" >Select Category</label>
                        {(subject==='null' || branch==='null')&& <select ref={typeRef} defaultValue='null' className='mb-3 form-select'><option>Select an appropriate subject first</option></select>}
                        {branch!=='null'&&subject!=='null'&&<select defaultValue='notes' ref={typeRef} className='mb-3 form-select'>
                            <option value='notes'>Notes</option>
                            <option value="papers">Previous year Papers</option>
                            <option value="books">Book</option>
                        </select>}
                        <label htmlFor='filename' className='me-3'>Enter File Name(To be seen by others)</label>
                        <input className='mb-3 form-control' ref={fileNameRef} type='text' />
                        <div>
                            <label style={{lineHeight: "1px"}} htmlFor="fileInput" className='mt-2 me-3'><i className={`${styles.uploadIcon} fas fa-plus-circle`}></i></label>
                            {filename?<span>{filename}</span>:<span>No File Chosen</span>}
                        </div>
                        <input onChange={fileHandler} accept='.pdf' ref={fileRef} type='file' id="fileInput" style={{display: "none"}} className="mt-2" name="note" multiple={false} />
                        <div className="text-center">
                            <input type='submit' value="Upload" className={`${styles.button} shadow btn btn-primary`}/>
                        </div>
                    </form>
                    </div>
                </div>
                


                <div className={`${styles.instruction} col-12 col-sm-12 col-md-6 col-lg-6`}>
                    <h1 className="text-center">Instructions</h1>
                    <ol>
                        <li>Kindly give appropriate file name as it will be seen by others and it should be relevant to the
                            material that is being uploaded.<br/>
                            For example, If you're uploading Griffith's book on electromagnetism, you should name it "Electromagnetism By Griffith's"
                        </li><br/>
                        <li>Do not upload any inappropriate content. Your email id will be shown to others on the content you uploaded.</li><br/>
                        <li>Kindly upload files in relevant category. It may lead to misorganization of the files.<br/>
                            For example, if your file is related to course CS101 and it's a book, then select branch as CS,
                            subject as CS101 and category as Book.
                        </li>
                    </ol>
                </div>
           
            </div>
       
    )
}
export default UploadForm;