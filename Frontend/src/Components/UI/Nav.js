import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { authActions } from "../../store/authenticate";
import styles from './Nav.module.css';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useMemo } from 'react';

const useStyles = makeStyles((theme) => ({
  
  paper: {
    padding: theme.spacing(2),
  },
}));


const Nav=props=>{
  const history=useHistory();
  const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    }; 

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


  const isAuthenticated=useSelector(state=>state.auth.isAuthenticated);
  const dispatch=useDispatch();
  const LogoutHandler=()=>{
    dispatch(authActions.unauthenticate());
    setAnchorEl(null);
    history.push('/home');
  }
  return(
    <div>
      <Popover
                id={id}
                className={classes.popover}
                classes={{
                paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                
            >
                <NavLink onClick={handlePopoverClose} to='/profile' style={{textDecoration:'none'}}><Typography style={{cursor: "pointer"}}> <i style={{fontSize: "20px"}} className={` fas fa-user-circle`}></i> Dashboard</Typography></NavLink>
                <Typography onClick={LogoutHandler} style={{cursor: "pointer"}}> <i style={{fontSize: "20px"}} className={` fas fa-sign-out-alt mt-2`}></i> Log out</Typography>
      </Popover>



      <nav className={`${styles.navcolor} navbar navbar-expand-lg  navbar-light`}>
        <div className="container-fluid" >
          <a style={{color: "white"}} className="navbar-brand" href='/'><img className={styles.logo} alt='Loading...' src='https://1.bp.blogspot.com/-sUEEtYSiBPU/V53oVPajyvI/AAAAAAAAA10/3-mY4Z3b02EUsZg6P_7Ae32uB_Yt6maSQCLcB/s1600/13376726-Young-boy-reading-an-English-book-Stock-Vector-english-cartoon-learning.jpg'/>Notes</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div  className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {isAuthenticated&&
            <li className="nav-item d-md-none">
                <NavLink activeClassName='active' className="nav-link" aria-current="page" style={{color: "white"}} to='/profile'>Dashboard</NavLink>
              </li>}
              <li className="nav-item">
                <NavLink activeClassName='active' className="nav-link" aria-current="page" style={{color: "white"}} to='/home'>Home</NavLink>
              </li>
              {!isAuthenticated&&<li className="nav-item">
                <NavLink activeClassName='active' className="nav-link" style={{color: "white"}} to='/register'>Sign Up</NavLink>
              </li>}
              {!isAuthenticated&&<li className="nav-item">
                <NavLink activeClassName='active' className="nav-link" style={{color: "white"}} to='/login'>Sign In</NavLink>
              </li>}
              {isAuthenticated&&<li className="nav-item">
                <NavLink activeClassName='active' className="nav-link" style={{color: "white"}} to='/upload'>Upload</NavLink>
              </li>}
              {isAuthenticated&&<li className="nav-item">
                <NavLink activeClassName='active' className="nav-link" style={{color: "white"}} to='/search'>Search</NavLink>
              </li>}
              {isAuthenticated&&<li className="nav-item d-md-none">
                <NavLink className="nav-link" to='/' onClick={LogoutHandler}>Logout</NavLink>
              </li>}
              {isAuthenticated&&<li className="nav-item d-none d-md-block">
                <NavLink activeClassName='active' className="nav-link" aria-current="page" to='#'>
                  <i style={{fontSize: "30px"}} className={`${styles.profileIcon} fas fa-user-circle`}></i>
                  <i class="fas fa-caret-down"
                  aria-describedby={id}
                  variant="contained"
                  onClick={handlePopoverOpen}
                  
                  ></i>
                </NavLink>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Nav;