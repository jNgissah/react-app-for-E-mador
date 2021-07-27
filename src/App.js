//import ReactDOM from 'react-dom';
import React, {useState} from 'react';

//import './css/materialize.css';
//import './css/style.css';
import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import data from './data';
import Menu from './menu';
import Footer from './footer';
//import About from './about';
//import Review from './r';





function App(){
//    console.log(cars)
    return(
       
        <div>
        <Menu/>

        <Footer/>
        </div>
    )
    
}



//export default H1;
export default App;
