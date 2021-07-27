//import React from 'react';
import React, {useState} from 'react';
import './css/materialize.css';
import './css/style.css';
//import welcome from './img/air-con-compressor-not-working-hero-image.jpg';
//import logo from './img/logo.png';
import image from './img/loose-alternator-belt.jpg';
//import Product from './product';

import { Parallax } from "react-parallax";




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



const Buy = ({car})=>{
    const[indexer,setIndexer]=useState([])

   
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
          <h4>Place an Order</h4>
          <p className="center-align light">Place an order for your car airconditioning compressors here  </p>
            
            
            <div>
                
                <div className="row">
                <div className="col l3 m3"></div>
                <div className="col l6 m6 s12">

                
                <form className="col s12" id="order_now" onsubmit="return false" enctype="multipart/form-data">
                         
        <div className="row">
         <div className="input-field col l8 s8">
          <select className="icon" onChange={(e)=>{ const new_info = car.filter((cars)=>cars.name===e.target.value); setIndexer(new_info)}} className="browser-default" required >
      <option value="choose brand"  disabled selected>Choose Brand</option>
        
        {car.map((cars,index)=>{
        
        return(
            <option key={cars.name}  value= {cars.name} data-icon="img/logo/audi.jpg">{cars.name}</option>
        )
    })}
        
      
    </select>
              
        </div>
        <div className="input-field col l4 s4" >
           <select className="browser-default"  required id="product_year" >
    <option value="" disabled selected>Year</option>

    <option value="2000">2000</option>
    <option value="2001">2001</option>
    <option value="2002">2002</option>
    <option value="2003">2003</option>
    <option value="2004">2004</option>
    <option value="2005">2005</option>
    <option value="2006">2006</option>
    <option value="2007">2007</option>
    <option value="2008">2008</option>
    <option value="2009">2009</option>
    <option value="2010">2010</option>
    <option value="2011">2011</option>
    <option value="2012">2012</option>
    <option value="2013">2013</option>
    <option value="2014">2014</option>
    <option value="2015">2015</option>
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
  </select>
        </div>
      </div>
                <div className="input-field col l12 s12" >
           <select className="browser-default"  required id="product_type">
    <option value="" disabled selected>Model</option>
        
      
{indexer.map((cars)=>{
    return(
   cars.brands.map((brands)=>{
       console.log(brands)
       return(
       <option key={brands} value={brands}>{brands}</option>
           )
   })
        )
})}

  </select>
        </div>  
                    
                    
                    <div className="row">
         <div className="input-field col s6">
          <input id="first_name" type="text" className="validate" required />
          <label for="first_name" >First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" required />
          <label for="last_name">Last Name</label>
        </div>
      </div>          
        
        <div className="row">
         <div className="input-field col s6">
          <input id="email" type="email" className="validate" required />
          <label for="email">Email</label>
        </div>
        <div className="input-field col s6">
          <input id="contact" type="tel" className="validate" required />
          <label for="contact">Contact</label>
        </div>
      </div>
        <div className="row">
         <div className="input-field col s6">
          <input id="location" type="text" className="validate" required />
          <label for="location">Location</label>
        </div>
        
      </div>
                <div className="input-field  center-align">
                
                     <input type="submit" className="btn" />
                      
                </div>    
                </form>
                
               </div>
                <div className="col l3 m3"></div>
                </div>
                
            </div>
        </div>
      </div>

    </div>
  </div>
  </div>


 

    )
}

export default Buy;