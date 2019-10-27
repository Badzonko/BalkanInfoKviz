import React, { Component } from 'react';
import '../components/Layout.css';
class Damjanovic extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            question: 'Kako si?',
            answer1: 'dobro a ti?',
            answer2: 'ne znam',
            answer3: 'Pomoc prijatelja?',
            answer4: 'Baneks zna odgovor'

         }
    }
    render() { 
       
        return ( 
            <div className="radovan">
                <div ><h1>{this.state.question}</h1></div>
                <div className="pitanja">
                <button ><h3>{this.state.answer1}</h3></button>
                <button ><h3>{this.state.answer2}</h3></button>
                <button ><h3>{this.state.answer3}</h3></button>
                <button ><h3>{this.state.answer4}</h3></button>
                </div>


            </div>
         );
    }
}
 
export default Damjanovic;