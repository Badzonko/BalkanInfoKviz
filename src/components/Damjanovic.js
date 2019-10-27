import React, { Component } from 'react';
import '../components/Layout.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Damjanovic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            

        }    
        
    }


   

    render() { 
      
        return ( 
            <div id="radnaslov">
                <h1>Radovan Damjanovic</h1>
                <br/>
                <div id="radovan" className="radovan">
                <a href=""><img className="damjan" src="http://www.vestinet.rs/wp-content/uploads/2017/01/radovan-damjanovic-600x338.jpg"/></a>
            </div>
            </div>
            
         );
    }
}
 
export default Damjanovic;