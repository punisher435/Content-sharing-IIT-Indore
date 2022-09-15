import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useRef } from 'react';
import img1 from '../../Photos/img1.jpg';
import images from './images';
import { useHttpClient } from '../hooks/httphook';
import ErrorModal from '../UI/ErrorModal';
import LoadingSpinner from '../UI/LoadingSpinner';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const RegisterForm=()=>{
  const[loading,error,sendRequest,clearError]=useHttpClient();
  const [imgSrc,setImgSrc]=useState(images[Math.floor((Math.random() * 19) + 1)]);
  useEffect(()=>{
    const id=setInterval(() => {
      const ind=Math.floor((Math.random() * 20) + 1)-1;
      setImgSrc(images[ind]);
    }, 3000);
    return()=>{
      clearInterval(id);
    }
  },[])
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: `url(${imgSrc})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();
  const emailRef=useRef();
  const passwordRef=useRef();
  const formHandler=(event)=>{
    event.preventDefault();
    const email=emailRef.current.value;
    const password=passwordRef.current.value;
    if(email.trim().substring(email.length-11)!=='@iiti.ac.in'){
      alert('Please enter IIT Indore email address');
      return;
    }
    if(password.length<8){
      alert('Password must have at least 8 characters');
      return;
    }
    emailRef.current.value="";
    passwordRef.current.value="";
    const register=async()=>{
      let res;
      try{
        res=await sendRequest('http://localhost:3010/register/','POST',JSON.stringify({emailId:email,password:password}),{
          "Content-type": "application/json",
          Accept: "application/json"
        });
    }catch(err){

    }
      const sent=res;
      if(sent.msg===0){
        alert('Please provide a working email id!');
        return;
      }else{
        alert('Please click on the link sent to your email id!');
        return;
      }
    }
  register();
  }
  return (
    <Grid container component="main" className={classes.root}>
      {error&&<ErrorModal error={error} onClear={clearError}/>}
      {loading&&<div className='center'><LoadingSpinner asOverlay/></div>}
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={formHandler} className={classes.form} noValidate>
            <TextField
              inputRef={emailRef}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              inputRef={passwordRef}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
export default RegisterForm;

console.log("end");