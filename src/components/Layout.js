import React, { Component } from 'react';
import '../components/Layout.css';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="wrapper">
               <a href="#radovan"><button className="izbor"><h1>Istorija</h1></button></a> 
                <button className="izbor"><h1>Politika</h1></button>
                <button className="izbor"><h1>Paranormalno</h1></button>
                <button className="izbor"><h1>Sport</h1></button>
                <button className="izbor"><h1>Muzika</h1></button>
                <button className="izbor"><h1>Nauka</h1></button>

            </div>
        );
    }
}
 
export default Layout;