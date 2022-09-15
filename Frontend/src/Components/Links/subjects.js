import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './subjects.module.css';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useMemo } from 'react';
import { useHttpClient } from '../hooks/httphook';
import ErrorModal from '../UI/ErrorModal';
import LoadingSpinner from '../UI/LoadingSpinner';

const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
    },
  }));

const Subject=()=>{
    const[loading,error,sendRequest,clearError]=useHttpClient();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [course,setCourse]=useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    }; 

    const open = Boolean(anchorEl);

    const params=useParams();
    const branch=useMemo(()=>params.branch,[params]);
    const [subjects,setSubjects]=useState([]);
    useEffect(()=>{
        if(branch==='CS'){
            const func=async()=>{
                try{
                    const data=await sendRequest('http://localhost:3010/subjects?sub=CS');
                    setSubjects(data);
                }catch(err){
    
                }
            }
            func();
        }else if(branch==='EE'){
            const func=async()=>{
                try{
                    const data=await sendRequest('http://localhost:3010/subjects?sub=EE');
                    setSubjects(data);
                }catch(err){
    
                }
            }
            func();
        }else if(branch==='ME'){
            const func=async()=>{
                try{
                    const data=await sendRequest('http://localhost:3010/subjects?sub=ME');
                    setSubjects(data);
                }catch(err){
    
                }
            }
            func();
        }else if(branch==='M&C'){
            const func=async()=>{
                try{
                    const data=await sendRequest('http://localhost:3010/subjects?sub=MTH');
                    setSubjects(data);
                }catch(err){
    
                }
            }
            func();
    }},[branch,sendRequest])
    return(
        <div>
            {error&&<ErrorModal error={error} onClear={clearError}/>}
            {loading&&<div className='center'><LoadingSpinner asOverlay/></div>}
            {/* <Typography
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                Hover with a Popover.
            </Typography> */}
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>{course}</Typography>
            </Popover>



            <h2 className='text-center'>{(branch==='CS'&&'Computer Science')||(branch==='EE'&&'Electrical Engineering')||(branch==='ME'&&'Mechanical Engineering')||('Mathematics And Computing')}</h2>
            <div className={`${styles.container}`}>
                {subjects.map((sub,ind)=><div onMouseOver={()=>setCourse(sub.courseName)} key={ind+1}>
                    <div className={`${styles.wrapper}`} 
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                    >
                        <NavLink style={{textDecoration:'none'}} to={`/search/${branch}?sub=${sub.subject}`}>
                            <img src='https://res.cloudinary.com/djbyqrhy9/image/upload/v1627740247/pngegg_hftleh.png' className={`${styles.folderIcon}` }/>
                            <p className='text-center' style={{lineHeight: "0px"}}>{sub.subject}</p>
                        </NavLink>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default Subject;