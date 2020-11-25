import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import CragsContainer from './components/SearchBar'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'

const API = 'http://localhost:3000';

class App extends Component {

  handleSearchSubmit = e => {
    fetch(API + `/get_areas`)
    .then(res => res.json())
    .then(console.log)
  }

  handleLogIn = e => {

  }

  handleSignUp = e => {

  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
          <Route path='/log-in' render={() => <LogIn handleLogIn={this.handleLogIn} />} />
          <Route path='/sign-up' render={() => <SignUp handleSignUp={this.handleSignUp} />} />
        </div>
      </Router>
    );
  } 
}

export default App;
