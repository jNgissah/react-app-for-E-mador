//import React from 'react';
import React, {useState} from 'react';
import './css/materialize.css';
import './css/style.css';
import welcome from './img/air-con-compressor-not-working-hero-image.jpg';
import logo from './img/logo.png';
import image from './img/Untitled-design-8-1024x576.png';
import Product_all from './product_all';
import data from './data';

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





const Products = ({car})=>{
    
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
        
        
    
    <div className="containe">
        <div className="section">

            <div className="row">
                <div className="col s12 center">
                    <h3><i className="mdi-content-send brown-text"></i></h3>
                    <h4>Our Products</h4>
                    <p className="center-align light">
                        We provide the best car air conditioning compressors for the following car brands.
                    </p>

                    <div className="row">
                        
                        <Product_all car={car}/>

                    </div>

                </div>
            </div>

        </div>
    </div>
    </div>

        
 
    )
}

export default Products;