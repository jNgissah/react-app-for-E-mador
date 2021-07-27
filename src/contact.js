//import React from 'react';
import React, {useState} from 'react';
import './css/materialize.css';
import './css/style.css';
import welcome from './img/air-con-compressor-not-working-hero-image.jpg';
import logo from './img/logo.png';
//import Product from './product';
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


const Contact = ({cars})=>{
    

    
    return(
        
        
    <div>
        
        <div style={styles}>
    <Parallax bgImage={require("./img/contactpp.jpg")} strength={300}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>E-MADOR</div>
        <div style={insideStyles2}>Car Air conditioner motors supplier <br/> Our products cover more than 15 major brands all around the world</div>
      </div>
    </Parallax>
        </div>
        
        
        



        <div className="container">
            <div className="section">

                <h4 className="center-align" >Contact Us</h4>

                <div className="row">

                    <div className="col l6">
                        <p><b>E-MADOR Company Limited</b></p>
                        <div className="row">
                            <div className="col l1 s1 m1">
                                <i className="material-icons">location_on</i>
                            </div>
                            <div className="col l10 s10 m10" > Kumasi, Ghana</div>
                        </div>

                        <div className="row">
                            <div className="col l1 s1 m1">
                                <i className="material-icons">mail</i>
                            </div>
                            <div className="col l10 s10 m10" > support@e-mador.com</div>
                        </div>

                        <div className="row">
                            <div className="col l1 s1 m1">
                                <i className="material-icons">phone</i>
                            </div>
                            <div className="col l10 s10 m10" > +233 3445344</div>
                        </div>
                        <div className="row">
                            <div className="col l1 s1 m1">
                                <i className="material-icons">facebook</i>
                            </div>
                            <div className="col l10 s10 m10" > E-mador</div>
                        </div>



                    </div>

                    <div className="col l6">
                        <h5 className="center-align">Leave a message</h5>


                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="first_name" type="text" className="validate"/>
                                    <label for="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate"/>
                                    <label for="last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="email" type="email" className="validate"/>
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">

                                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                                    <label for="textarea1" className='active'>Leave your message</label>
                                </div>
                            </div>
                        </form>



                    </div>

                </div>


            </div>
        </div>
    </div>



    )
}

export default Contact;