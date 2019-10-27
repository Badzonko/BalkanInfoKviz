import React, { Component } from 'react';
import '../components/Layout.css';
  

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <nav>
            <ul>
                <li><a className="active" href="#home"><img src="https://dslv9ilpbe7p1.cloudfront.net/RpeKbuqTXl6IannZRqpqGg_store_logo_image.png"/></a></li>
                <span className="right">
                </span>
                <li><a href=""><h5>Quiz</h5></a></li>
                <li><a href="#contact"><h5>Official website</h5></a></li>
                <li><a href="#about"><h5>Badzo Web development</h5></a></li>
                
                
            </ul>
                
                </nav>
            </div>
         );
    }
}
 
export default Navbar;