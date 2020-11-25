import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import CragsContainer from './components/SearchBar'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import NavLink from 'react-router-dom/NavLink';

const API = 'http://localhost:3000';

class App extends Component {

  state = {
    user: null,
    token: null
  }

  handleSearchSubmit = e => {
    fetch(API + `/get_areas`)
    .then(res => res.json())
    .then(console.log)
  }

  handleLogIn = info => {
    console.log('login')
    this.logInAuthFetch(info,'http://localhost:3000/login')
  }

  handleSignUp = e => {
    e.preventDefault()
    this.signUpAuthFetch(e,'http://localhost:3000/users')
  }

  logInAuthFetch = (info, request) => {  
    console.log(info)
    fetch(request,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({user: data.user, token: data.token}, ()  =>{
        console.log(this.state)
        console.log(this.props)
      }
        )
    })
  }

  signUpAuthFetch = (e, request) => {  
    console.log(e)
    debugger
    fetch(request,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target[0].value,
        username: e.target[1].value,
        password: e.target[2].value,
        profile_pic: e.target[3].value,
        bio: e.target[4].value,
        location: e.target[5].value
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({user: data.user, token: data.token}, ()  =>{
        console.log(this.state)
        console.log(this.props)
      }
        )
    })
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
