//import React from 'react';
import React, {useState} from 'react';
import data from './data';
import './css/materialize.css';
import './css/style.css';
import welcome from './img/air-con-compressor-not-working-hero-image.jpg';
import logo from './img/logo.png';


const Footer = ()=>{

    return(
        <footer className="page-footer black">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Company Bio</h5>
                        <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="white-text">Quick Links</h5>
                        <ul>
                            <li><a className="white-text" href="about_us.html">About Us</a></li>
                            <li><a className="white-text" href="products.html">Products</a></li>
                            <li><a className="white-text" href="buy.html">Order Now</a></li>
                        </ul>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="white-text">Contact Us</h5>
                        <div className="row">
                            <div className="col l1 s1 m1"> <i className="material-icons">location_on</i> </div>
                            <div className="col l10 s10 m10"> Kumasi, Ghana</div>
                        </div>
                        <div className="row">
                            <div className="col l1 s1 m1"> <i className="material-icons">mail</i> </div>
                            <div className="col l10 s10 m10"> <a className="white-text" href="mailto:support@e-mador.com"> support@e-mador.com </a> </div>
                        </div>
                        <div className="row">
                            <div className="col l1 s1 m1"> <i className="material-icons">phone</i> </div>
                            <div className="col l10 s10 m10"> <a className="white-text" href="tel:+233 3445344">+233 3445344</a> </div>
                        </div>
                        <div className="row">
                            <div className="col l1 s1 m1"> <i className="material-icons">facebook</i> </div>
                            <div className="col l10 s10 m10"> <a className="white-text" href="">E-mador</a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container center-align"> <span>copyright 2021 E-mador all rights reserved</span>
                    <br/> Powered by <a className="brown-text text-lighten-3" href="http://raventechhub.com">RavinLead Tech Hub</a> </div>
            </div>
        </footer>
    )
}

export default Footer;