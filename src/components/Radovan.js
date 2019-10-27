import React, { Component } from 'react';
import '../components/Layout.css';

class Radovan extends Component {
    constructor(props) {
        super(props);
        this.state = [
            { question: 'Ko je nastariji narod?',
                answer:'Srbi',
                answer0: 'Serbi',
                answer1: 'Sarbi',
                answer2: 'Sirbi'
            },
            { question: 'Ko je nastariji narod na balkanu?',
            answer:'Srbi',
            answer0: 'Serbi',
            answer1: 'Sarbi',
            answer2: 'Sirbi'
        }
        
        
        ]
    }
    render() { 
        return ( <div>
            <h3>{this.state.question}</h3>
        </div> );
    }
}
 
export default Radovan;