//import React from 'react';
import React, {useState} from 'react';

import data from './data';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
//import './css/materialize.css';
//import './css/style.css';



import Main from './main';
import Slider from './slider';
import Contact from './contact';
import About from './about';
import Products from './products';
import Buy from './buy';
//import welcome from './img/air-con-compressor-not-working-hero-image.jpg';
import logo from './img/logo.png';






const Menu = ()=>{
    const [cars]=useState(data);
        
 

        
        
        
        

    return(
        
        <Router>
        <nav className="white" role="navigation">
            <div className="nav-wrapper container">
                <a href="index.html" className="brand-logo logo-container"> <img src={logo} className="logo_img" alt="" /> </a>
                <ul className="right hide-on-med-and-down">
        
                    <li><Slider/> </li>
                    <li><Link to="/products">Brands</Link></li>
                    <li><Link to="/buy">Order Now</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                
        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons"><Slider className="sidenav-trigger"  data-target="nav-mobile" /></i></a> </div>
        </nav>
        
        
       
        
        <Switch>
          <Route path="/products">
            <Products car={cars}/>
          </Route> 
        <Route path="/buy">
            <Buy car={cars} />
          </Route>
        <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Main car={cars}/>
          </Route>
        </Switch>
        
        </Router>
    )
}



export default Menu;