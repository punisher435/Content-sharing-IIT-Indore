import { useRef,useState } from "react";
import Modal from "../UI/modal";
import styles from './forgotPassword.module.css';

const ForgotPassword=(props)=>{
    const emailRef=useRef();
    const passwordRef=useRef();
    const [pass,setPass]=useState(false);
    const[error,setError]=useState(false);
    const [success,setSuccess]=useState(false);
    const emailHandler=(event)=>{
        event.preventDefault();
        fetch('http://localhost:3010/check-email',{
            method:'POST',
            headers: {
                "Content-type": "application/json",
                Accept: "application/json"
              },
            body:JSON.stringify({emailId:emailRef.current.value})
        }).then(res=>res.json()).then(res=>{
            if(res.msg===true){setPass(true);setError(false);}
            else setError(true);
        })
    }
    const passwordHandler=(event)=>{
        event.preventDefault();
        const emailId=emailRef.current.value;
        const password=passwordRef.current.value;
        if(password.length<6){
            setError(true);
            return;
        }
        setError(false);
        fetch('http://localhost:3010/update',{
            method:'POST',
            headers: {
                "Content-type": "application/json",
                Accept: "application/json"
              },
            body:JSON.stringify({emailId,password})
        }).then(res=>setSuccess(true))
    }
    return(
        <Modal onCancel={props.onCancel}>
            <div className='p-3'>
                <h2>Find your Account</h2>
                <form onSubmit={emailHandler}>
                    <label htmlFor='email'>Enter your Email</label>
                    <input ref={emailRef} type={pass?'hidden':'search'} placeholder='@iitgoa.ac.in'/>
                    {pass&&<p>{emailRef.current.value}</p>}
                    {error&&!pass&&<p style={{color:'red'}}>Email Not Found, Please enter your registered IIT Goa email address</p>}
                    {pass?<p style={{color:'green'}}>Email Found</p>:<button className='btn btn-primary' type='submit'>Search</button>}
                </form>
            </div>
            {pass&&<div className='p-3'>
                <h2>Change Password</h2>
                <form onSubmit={passwordHandler}>
                    <label htmlFor='email'>Enter your new Password</label>
                    <input ref={passwordRef} type={success?'hidden':'password'} placeholder='New password'/>
                    {success&&<p>{passwordRef.current.value}</p>}
                    {error&&!success&&<p style={{color:'red'}}>Must Have at least 6 characters</p>}
                    {success?<p style={{color:'green'}}>The link has been sent to your email Id</p>:<button className='btn btn-primary' type='submit'>submit</button>}
                </form>
            </div>}
        </Modal>
    )
}
export default ForgotPassword;