import React from "react";

import axios from 'axios';
import styles from './pdfStyling.module.css';

export default function Pdf(props) {


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
  return (
  <div className="col-3">  
    <div className={`${styles.card}`} style={{cursor:'pointer'}}  onClick={pdf.bind(null,props.file)}>
          <div className={`text-center ${styles.pdfLogoCard}`}>
            <img src='https://res.cloudinary.com/djbyqrhy9/image/upload/v1628052434/pdf-icon-png-2068_p0hr0c.png' className={`${styles.pdfLogo}`}/>
          <hr/>
          </div>
          <div className={`${styles.details}`}>
            <span> <i className={`far fa-file-pdf ${styles.smallIcon}`}></i> {props.filename.split('-')[0]}</span><br/>
            <span style={{fontStyle: "italic"}}>Uploaded by: <span className={`${styles.uploadDetails}`} >{props.email}</span> </span><br/>
            <span style={{fontStyle: "italic"}}>Uploaded On: <span className={`${styles.uploadDetails}`}>{props.date.slice(0,10)}</span></span>
          </div>
    </div>
  </div>
  );
}
