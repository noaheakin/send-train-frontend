import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import CragsContainer from './containers/CragsContainer';
import ClimbsContainer from './containers/ClimbsContainer';
import ClimbInfo from './components/ClimbInfo';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home';

const API = 'http://localhost:3000';

class App extends Component {

  state = {
    user: null,
    token: null,
    crags: [],
    climbs: [],
    searchTerm: "",
    selectedClimb: ""
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
        this.props.history.push(`/search?=${this.state.searchTerm}`)
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
        this.props.history.push(`/user/${data.user.username}`)
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
      .then(climbs => {
        this.setState({climbs: climbs.routes})
        this.props.history.push(`/crag/${crag.name.split(' ').join('-')}`)
    })
  }

  handleClimbClick = (climb) => {
    this.setState({selectedClimb: climb})
    this.props.history.push(`/climb/${climb.name.split(' ').join('-')}`)
  }

  render() {
    return (
        <div className="App">
          <NavBar user={this.state.user} handleLogOut={this.handleLogOut}/>
          <SearchBar handleSearchSubmit={this.handleSearchSubmit} user={this.state.user} searchTerm={this.state.searchTerm} props={this.props}/>
          {/* <CragsContainer crags={this.state.crags} handleClick={this.handleCragClick} /> */}
          <Switch>
          {/* <Route path='/' render={() => <SearchBar handleSearchSubmit={this.handleSearchSubmit} user={this.state.user} searchTerm={this.state.searchTerm} />} /> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/log-in' render={() => <LogIn handleLogIn={this.handleLogIn} />} />
          <Route exact path='/sign-up' render={() => <SignUp handleSignUp={this.handleSignUp} />} />
          <Route exact path='/:search' render={() => <CragsContainer crags={this.state.crags} handleClick={this.handleCragClick}/>} />
          <Route exact path='/crag/:name' render={() => <ClimbsContainer climbs={this.state.climbs} handleClick={this.handleClimbClick}/>} />
          <Route exact path='/climb/:name' render={() => <ClimbInfo climb={this.state.selectedClimb} />} />
          {/* {(this.state.searchTerm !== "") ? <Route path={`/search?${this.state.searchTerm}`} render={() => <CragsContainer crags={this.state.crags} />} /> : <p>No Crags</p>} */}
          </Switch>
        </div>
    );
  } 
}

export default withRouter(App);
