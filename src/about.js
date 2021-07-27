//import React from 'react';
import React, {useState} from 'react';
import './css/materialize.css';
import './css/style.css';
import welcome from './img/air-con-compressor-not-working-hero-image.jpg';
import logo from './img/logo.png';
import image from './img/about1.jpg';

import { Parallax, Background } from "react-parallax";




const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
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





const About = ({cars})=>{
    
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

    <h4 className="center-align">About Us</h4>
    
    <p>
        
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, iure, accusantium autem maxime adipisci unde dolor. Porro, maiores amet alias minus repellendus, beatae voluptate 
    minima voluptates commodi quisquam laboriosam. Facilis?
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id consequuntur et fuga nihil, maiores architecto quod. Consequatur quia dicta dolorum, nihil dolore similique delectus aliquam sit cupiditate accusamus! Praesentium, voluptatum! 
    
          
    </p>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti cumque, natus dolore officiis pariatur ratione, optio delectus corrupti eum voluptatem illum asperiores. Velit, quis quo id mollitia commodi facilis dolorem!
    </p>
     
    </div>
    </div>
    </div>
 


    )
}

export default About;