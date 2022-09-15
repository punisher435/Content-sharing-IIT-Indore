import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authenticate';
import { useHistory } from 'react-router-dom';
import { useRef,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ForgotPassword from './forgotPassword';
import images from './images';
import styles from './loginstyle.module.css';
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



const LoginForm=()=>{
  const[loading,error,sendRequest,clearError]=useHttpClient();
  const [imgSrc,setImgSrc]=useState(images[Math.floor((Math.random() * 19) + 1)]);
  useEffect(()=>{
    const id=setInterval(() => {
      const ind=Math.floor((Math.random() * 20) + 1)-1;
      setImgSrc(images[ind]);
    }, 6000);
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
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      transition: '2s ease-in-out;',
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
    const [fp,setFp]=useState(false);
    const classes = useStyles();
    const location=useLocation();
    const emailRef=useRef();
    const passwordRef=useRef();
    const dispatch=useDispatch();
    const history=useHistory();
    const fpHandler=()=>{
      setFp(prev=>!prev);
    }
    const formHandler=(event)=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        if(email.trim().substring(email.length-11)!=='@iiti.ac.in'){
          alert('Please enter IIT Indore email address');
          return;
        }
        if(password.length<8){
          alert('Password must have atleast 8 characters');
          return;
        }
        emailRef.current.value="";
        passwordRef.current.value="";
        const login=async()=>{
          let req;
          try{
            req=await sendRequest('http://localhost:3010/login/','POST',JSON.stringify({emailId:email,password:password}),{
              "Content-type": "application/json",
              Accept: "application/json"
            });
          }catch(err){
            return;
          }
          const token=req.token;
          dispatch(authActions.authenticate({token}));
          history.replace('/');
        }
        login();
    }
    

  return (
    <React.Fragment className={styles.back}>
      {error&&<ErrorModal error={error} onClear={clearError}/>}
      {loading&&<div className='center'><LoadingSpinner asOverlay/></div>}
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {location.pathname==='/success/login' && <p>You have registered successfully! Please use your email and password to login</p>}
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={formHandler} noValidate>
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
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link onClick={fpHandler}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <NavLink to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    {fp && <ForgotPassword onCancel={fpHandler}/>}
    </React.Fragment>
  );
}
export default LoginForm;