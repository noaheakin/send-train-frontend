import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          
        </div>
      </Router>
    );
  } 
}

export default App;
