import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './homepageStyling.module.css';

const Filepage=()=>{
    const history=useHistory();
    const eventHandler=(sub)=>{
        history.push(`/files/${sub}`);
    }
    return(
        <div className='col-12'>
            <div id="carouselExampleFade" class="carousel slide carousel-fade"  data-bs-ride="carousel">
                <div class="carousel-inner" style={{height: "60vh"}}>
                    <div className={`carousel-item active ${styles.carouselContainer1} `}>
                        <div className="d-flex flex-row mt-3">
                            <img src="https://www.iitIndore.ac.in/img/iit-Indore-logo.svg" className={`${styles.clgLogo}`}/>
                            <div className="ms-3">
                                <h1 className={`${styles.clgname}`}>IIT Indore</h1>
                                <h5 className={`${styles.text}`}>Indian Institute of<br/> Technology Indore</h5>
                            </div>
                        </div>
                    </div>
                    <div className={`carousel-item ${styles.carouselContainer2}`}>
                        <div className="d-flex flex-row mt-3">
                            <img src="https://www.iitIndore.ac.in/img/iit-Indore-logo.svg" className={`${styles.clgLogo}`}/>
                            <div className="ms-3">
                                <h1 className={`${styles.clgname}`}>IIT Indore</h1>
                                <h5 className={`${styles.text}`}>Indian Institute of<br/> Technology Indore</h5>
                            </div>
                        </div>
                    </div>
                    <div class={`carousel-item ${styles.carouselContainer3}`}>
                        <div className="d-flex flex-row mt-3">
                                <img src="https://www.iitIndore.ac.in/img/iit-Indore-logo.svg" className={`${styles.clgLogo}`}/>
                                <div className="ms-3">
                                    <h1 className={`${styles.clgname}`}>IIT Indore</h1>
                                    <h5 className={`${styles.text}`}>Indian Institute of<br/> Technology Indore</h5>
                                </div>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        <h1 className="mt-5 text-center">What files are you looking for?</h1>
        <div className={`${styles.categoryCard}`}>
            <div style={{cursor:'pointer'}} onClick={eventHandler.bind(null,'CS')}>
                <figure className={`${styles.hoverClass}`}>
                    <img src='https://res.cloudinary.com/djbyqrhy9/image/upload/v1627740247/pngegg_hftleh.png' className={`${styles.folderIcon}` } />
                    <figcaption className={`text-center`}>CS</figcaption>
                </figure >
            </div>
            <div style={{cursor:'pointer'}} onClick={eventHandler.bind(null,'EE')}>
                <figure className={`${styles.hoverClass}`}>
                    <img src='https://res.cloudinary.com/djbyqrhy9/image/upload/v1627740247/pngegg_hftleh.png' className={`${styles.folderIcon}` } />
                    <figcaption className={`text-center`}>EE</figcaption>
                </figure >
            </div>
            <div style={{cursor:'pointer'}} onClick={eventHandler.bind(null,'ME')}>
                <figure className={`${styles.hoverClass}`}>
                    <img src='https://res.cloudinary.com/djbyqrhy9/image/upload/v1627740247/pngegg_hftleh.png' className={`${styles.folderIcon}` } />
                    <figcaption className={`text-center`}>ME</figcaption>
                </figure >
            </div>
            <div style={{cursor:'pointer'}} onClick={eventHandler.bind(null,'M&C')}>
                <figure className={`${styles.hoverClass}`}>
                    <img src='https://res.cloudinary.com/djbyqrhy9/image/upload/v1627740247/pngegg_hftleh.png' className={`${styles.folderIcon}` } />
                    <figcaption className={`text-center`}>M&C</figcaption>
                </figure >
            </div>

        </div>
        </div>
    )
}
export default Filepage;