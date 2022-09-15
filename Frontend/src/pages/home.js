import styles from './homepageStyling.module.css';

const Home=()=>{
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

           <div className="d-flex flex-row mt-3">
                <img src="https://www.iitIndore.ac.in/img/iit-Indore-logo.svg" className={`${styles.clgLogo}`}/>
                <div className="ms-3">
                    <h1 className={`${styles.clgname}`}>IIT Indore</h1>
                    <h5 className={`${styles.text}`}>Indian Institute of<br/> Technology Indore</h5>
                </div>
            </div>
            <h1>Home Page</h1>
        </div>
    )
}
export default Home;