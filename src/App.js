import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Damjanovic from './components/Damjanovic';
import Radovan from './components/Radovan';
import Jovan from './components/Jovan';
import Deretic from './components/Deretic';


function App() {
  return (
<div>
<Navbar/>
<br/>
<Layout/>
<br/>
<Damjanovic/>
<br/>
<Jovan/>
</div>


  );
    
  
}

export default App;
