import React, { Component } from 'react';
import './App.css';
import { Route, Link, Redirect, Switch, withRouter } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import CragsContainer from './containers/CragsContainer'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
// import { browserHistory } from 'react-router'

const API = 'http://localhost:3000';

class App extends Component {

  state = {
    user: null,
    token: null,
    crags: [],
    searchTerm: ""
  }

  handleSearchSubmit = e => {
    e.preventDefault()
    console.log(this.props)
    fetch(API + `/get_areas`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          name: e.target[0].value,
      })
      })
      .then(res => res.json())
      .then(crags => {
        this.setState({crags: crags, searchTerm: e.target[0].value});
        this.props.history.push(`crags/${this.state.searchTerm}`)
      })
  }

  handleLogIn = info => {
    console.log('login')
    this.logInAuthFetch(info)
  }

  handleSignUp = e => {
    e.preventDefault()
    this.signUpAuthFetch(e)
  }

  handleLogOut = () => {
    this.setState({
      user: null,
      token: null
    })
  }

  logInAuthFetch = (info) => {  
    console.log(info)
    fetch('http://localhost:3000/login',{
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
      this.setState({user: data.user.username, token: data.token}, ()  =>{
        <Link to={`/${data.user.username}`} />
      }
        )
    })
  }

  signUpAuthFetch = e => {  
    console.log(e)
    debugger
    fetch('http://localhost:3000/register',{
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

  handleCragClick = (crag) => {
    fetch(API + `/get_climbs`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          lat: crag.lat,
          lon: crag.lon
      })
      })
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    return (
        <div className="App">
          <NavBar user={this.state.user}/>
          <SearchBar handleSearchSubmit={this.handleSearchSubmit} user={this.state.user} searchTerm={this.state.searchTerm} props={this.props}/>
          <CragsContainer crags={this.state.crags} handleClick={this.handleCragClick} />
          <Switch>
          {/* <Route path='/' render={() => <SearchBar handleSearchSubmit={this.handleSearchSubmit} user={this.state.user} searchTerm={this.state.searchTerm} />} /> */}
          <Route path='/log-in' render={() => <LogIn handleLogIn={this.handleLogIn} />} />
          <Route path='/sign-up' render={() => <SignUp handleSignUp={this.handleSignUp} />} />
          <Route path='crags/:search' render={() => <CragsContainer crags={this.state.crags}/>} />
          {/* {(this.state.searchTerm !== "") ? <Route path={`/search?${this.state.searchTerm}`} render={() => <CragsContainer crags={this.state.crags} />} /> : <p>No Crags</p>} */}
          </Switch>
        </div>
    );
  } 
}

export default withRouter(App);
