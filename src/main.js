import React from 'react';
//import React, {useState} from 'react';
//import welcome from './img/air-con-compressor-not-working-hero-image.jpg';
//import logo from './img/logo.png';
import image from './img/air-con-compressor-not-working-hero-image.jpg';
import image2 from './img/Engaging-an-AC-Compressor-Clutch.jpg';
import Product from './product';
//import Products from './products';
import  {
 
  Link
} from 'react-router-dom';
//import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { Parallax, Background } from "react-parallax";




const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const color = {
  color:"white"
};
const insideStyles = {
//  background: "white",
  padding: "0%",
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontSize:"272%",
  color:"white"
};    

const insideStyles2 = {
//  background: "white",
  padding: "0%",
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontSize:"100%",
  color:"white"
};



const Main = ({car})=>{
  
    return(
        
      <div>

        <div style={styles}>
    <Parallax bgImage={image} strength={300}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>E-MADOR</div>
        <div style={insideStyles2}>Car Air conditioner motors supplier <br/> Our products cover more than 15 major brands all around the world</div>
      </div>
    </Parallax>
        </div>
        
        
        
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                            <h5 className="center">STRICTLY QUALITY CONTROL</h5>
                            <p className="light">We have full quality control system for each product we sell</p>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                            <h5 className="center">WIDE RANGE COVER</h5>
                            <p className="light">We cover more than 20 famous car brands of Air Conditioner motors. here is your one stop purchasing shop.</p>
                        </div>
                    </div>
                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                            <h5 className="center">RESPONSIVE SERVICE</h5>
                            <p className="light">We respond to our customers within 12 hours during working days. the sales representative will help you select right products based on your specification.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <Parallax bgImage={image2} strength={400}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}></div>
      </div>
    </Parallax>
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className="col s12 center">
                        <h3><i className="mdi-content-send brown-text"></i></h3>
                        <h4>Our Products</h4>
                        <p className="center-align light"> We provide the best of car air conditioning compressors for the following car companies. </p>
                        <div className="row">
                           
                           
                           
                            <Product car={car}/>
                            
                             
                               
                            <div className="center-align">
        <button className="btn btn-primary"><Link style={color} to="/products">More</Link></button>
            
        
        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="row">
                    <div className="col s12 l6 m6">
                        <h5 className="center-align">Contact E-mador</h5>
                        <div className="center-align"> <img src="img/contact1.jpg" width="60%" alt="" />
                            <br/> <a href="tel:+233 333333" className="btn">Call Now</a> </div>
                    </div>
                    <div className="col s12 l6 m6">
                        <h5 className="center-align">Our Location</h5>
                        <iframe title="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.8484336332685!2d-76.81632558464938!3d38.90458117956952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7eab2795cc2e9%3A0x3b7e3088d8779114!2s1011%20Winged%20Foot%20Dr%2C%20Bowie%2C%20MD%2020721%2C%20USA!5e0!3m2!1sen!2sgh!4v1606680803222!5m2!1sen!2sgh" width="100%" height="350" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
        
        
    )
}

export default Main;