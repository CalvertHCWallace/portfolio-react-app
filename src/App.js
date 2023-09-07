import React from 'react';
import './App.css';
import Navbar from './Navbar'; 
import AboutMeCard from './AboutMeCard'; 

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>This is where I showcase my projects and skills.</p>
        <AboutMeCard />  
      </header>
    </div>
  );
}

export default App;
