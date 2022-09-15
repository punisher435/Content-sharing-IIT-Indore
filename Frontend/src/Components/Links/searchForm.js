import { useState,useRef } from "react";
import { useHistory } from "react-router-dom";
//import './searchFormStyling.module.css';
import styles from './searchFormStyling.module.css';

const SearchForm=()=>{
    const branchRef=useRef();
    const history=useHistory();
    const [branch,setBranch]=useState('null');
    const [subject,setSubject]=useState('null');
    const subjectRef=useRef();
    const BranchChangeHandler=event=>{
        setBranch(branchRef.current.value);
    }
    const subjectHandler=()=>{
        setSubject(subjectRef.current.value);
    }
    const formHandler=()=>{
        if(branch==='null'){
            alert('Please enter Branch');
            return;
        }else if(subject==='null'){
            alert('Please enter a subject');
            return;
        }
        history.push(`/search/${branch}?sub=${subject}`);
    }
    return(
        <div className={`${styles.card}`}>
            <div className={`col-lg-4 col-md-8 col-12 shadow ${styles.mainCard}`}>
                <div className={`${styles.formHeading} p-3`}>
                    <h1>Search Files <i className={`${styles.fileIcon} far fa-file`}></i> </h1>
                    <p>Search your files by filling the form below</p>
                </div>
                <div className={`${styles.formBox}`}>
                    <form onSubmit={formHandler} className='d-flex flex-column justify-content-center'>
                        <label style={{lineHeight: "1px"}} className="mt-3" >Select Branch</label>
                        <select ref={branchRef} defaultValue='null' onChange={BranchChangeHandler} className='mb-3 form-select'>
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
                        <div className="text-center">
                            <input type='submit' value="Search" className={` ${styles.button} mt-3 btn btn-primary`}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
                
    )
}
export default SearchForm;