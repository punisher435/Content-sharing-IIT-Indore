import { useSelector } from 'react-redux';
import { Route,Redirect,Switch } from 'react-router-dom';
import Home from '../pages/home';
import Register from '../pages/register';
import Login from '../pages/login';
import Search from '../pages/search';
import Upload from '../pages/upload';
import NotFound from '../pages/notfound';
import InfoPage from '../pages/infoPage';
import Files from '../Components/Links/files';
import Filepage from '../pages/filepage';
import Subject from '../Components/Links/subjects';
import ProfilePage from '../pages/profilepage';

import './routes.css';
import React from 'react';


const Routes=()=>{
    const logged=useSelector(state=>state.auth.isAuthenticated);
    let routes;
    if(logged){
        routes=(
            <Switch>
            <Route path='/' exact>
                <Redirect to='/home' />
                </Route>
                <Route path='/home' exact>
                <Filepage/>
                </Route>
                <Route path='/register' exact>
                <Register/>
                </Route>
                <Route path='/success/login' exact>
                <Login/>
                </Route>
                <Route path='/login' exact>
                <Login/>
                </Route>
                <Route path='/search' exact>
                <Search/>              
                </Route>
                <Route path='/upload' exact>
                <Upload/>
                </Route>
                <Route path='/files/:branch' exact>
                    <Subject/>
                </Route>
                <Route path='/search/:branch' exact>
                <InfoPage/>
                </Route>
                <Route path='/:branch/:subject' exact>
                    <Files/>
                </Route>
                <Route path='/profile'>
                    <ProfilePage/>
                </Route>   
                <Route path='/'>
                <NotFound/>
                </Route>
            </Switch>
        )
    }else{
        routes=(
            <Switch>
                <Route path='/' exact>
                <Redirect to='/home' />
                </Route>
                <Route path='/home' exact>
                <Home/>
                </Route>
                <Route path='/register' exact>
                <Register/>
                </Route>
                <Route path='/profile'>
                    <Redirect to='/login'/>
                </Route>
                <Route path='/success/login' exact>
                <Login/>
                </Route>
                <Route path='/login' exact>
                <Login/>
                </Route>
                <Route path='/search' exact>
                <Redirect to='/login'/>              
                </Route>
                <Route path='/files'>
                    <NotFound/>
                </Route>
                <Route path='/files/:branch'>
                    <NotFound/>
                </Route>
                <Route path='/upload' exact>
                <Redirect to='/login'/>
                </Route>
                <Route path='/search/:branch'>
                <Redirect to='/login'/>
                </Route>
                <Route path='/:branch/:subject'>
                    <Redirect to='/login'/>
                </Route>
                <Route path='/'>
                <NotFound/>
                </Route>
            </Switch>
        )
    }
    return(<main>{routes}
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-4 col-sm-4 col-md-4 col-lg-2 item">
                        <h3>Links</h3>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/upload">Upload</a></li>
                            <li><a href="/search">Search</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 col-lg-2 item">
                        <ul>
                            <li><a href="#"><h3>Sign in</h3></a></li>
                            <li><a href="#"><h3>Sign up</h3></a></li>
                        </ul>
                    </div>
                    <div class="col-4 col-sm-4 col-md-4 col-lg-2 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Website</a></li>
                            <li><a href="#">Team</a></li>
                            
                        </ul>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 item">
                        <div className="d-flex flex-row">
                            <a href="https://www.iiti.ac.in/" target="_blank"><img src="https://www.iiti.ac.in/public/themes/iitindore/demos/update-logo.png" className={`clgLogo`}/></a>
                            <div className="">
                                <h1 className={`clgname`}>IIT Indore</h1>
                                <h5 className={`text1`}>Indian Institute of<br/> Technology Indore</h5>
                                <i className={`fab fa-twitter socialLogo`}></i>
                                <i className={`fab fa-instagram socialLogo`}></i>
                                <i className={`fab fa-linkedin socialLogo`}></i>
                                <i className={`fab fa-youtube socialLogo`}></i>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-12 item text">
                        <h3>Notes</h3>
                        <p>IIT Indore will strive to become a unique institution of higher learning, offering state of the art education, research, and training in science and technology to have impact on society, environment and global challenges.
                        IIT Indore will strive to become a unique institution of higher learning, offering state of the art education, research, and training in science and technology to have impact on society, environment and global challenges.
                        </p>
                    </div>
                    <div className="col-12 text-center col-md-12  item">
                        <h4>Contact us</h4>
                        <ul>
                            <li className="contact"> <i className={`far fa-envelope maillogo`}> </i><span>ee190002016@iiti.ac.in</span></li>
                        </ul>
                    </div>
                </div>
                <p class="copyright">© Copyright 2021 Notes</p>
            </div>
        </footer>
    </div>
    </main>);
}
export default Routes;