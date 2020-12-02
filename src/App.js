import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import CragsContainer from './containers/CragsContainer';
import UserCragsContainer from './containers/UserCragsContainer';
import ClimbsContainer from './containers/ClimbsContainer';
import ClimbInfo from './components/ClimbInfo';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Home from './components/Home';

const API = 'http://localhost:3000';

class App extends Component {

  state = {
    user: null,
    userID: null,
    token: null,
    crags: [],
    userCrags: [],
    displayUserCrags: [],
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

  fetchUserCrags = () => {
    console.log("started")
    this.setState({
      displayUserCrags: []
    })
    this.state.userCrags.map(crag => (
      fetch(`http://localhost:3000/crags/${crag.crag_id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        })
        .then(res => res.json())
        .then(crag => this.setState({
          displayUserCrags: [...this.state.displayUserCrags, crag]
        })
    )))
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
      userID: null,
      token: null,
      crags: [],
      userCrags: [],
      displayUserCrags: [],
      climbs: [],
      searchTerm: "",
      selectedClimb: ""
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
      this.setState({user: data.user.username, userID: data.user.id, token: data.token, userCrags: data.user.user_crags}, ()  =>{
        this.props.history.push(`/user/${data.user.username}`)
      })
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

  // handleUserCragClick = (crag) => {
  //   console.log(`Clicked on ${crag}`)
  // }

  handleAddFavorite = (e, crag) => {
    e.stopPropagation()
    console.log(crag.id)
    fetch(API + `/user_crags`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          user_id: this.state.userID,
          crag_id: crag.id
      })
      })
      .then(res => res.json())
      .then(crag => this.setState({
        userCrags: [...this.state.userCrags, crag]
      }))
  }

  handleDeleteFavorite = (e, crag) => {
    let targetCrag = this.state.userCrags.filter(c => c.crag_id === crag.id)
    console.log(targetCrag[0].id)
    e.stopPropagation()
    fetch(API + `/user_crags/${targetCrag[0].id}`, {
      method: "DELETE",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }})
    this.setState({
      userCrags: this.state.userCrags.filter(c => c.crag_id !== crag.id),
      displayUserCrags: this.state.displayUserCrags.filter(c => c !== crag)
    })
  }

  addWishClimb = (e, climb) => {
    e.stopPropagation()
    console.log(climb)
    fetch(API + `/climbs`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          mp_id: climb.id,
          name: climb.name
      })
      })
      .then(res => res.json())
      .then(console.log)
      // .then(climb => this.createWishListClimb(climb))
  }

  // createWishListClimb = (climb) => {
  //   fetch('http://localhost:3000/target_climbs', {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       user_id: this.state.userID,
  //       climb_id: climb.id
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(favorite => {if(!this.state.currentUserFavorites.find(favorite => favorite.organism_id === organism.id)) {
  //     alert("Successfully added to favorites!")
  //     this.setState({
  //     currentUserFavorites: [...this.state.currentUserFavorites, favorite]
  //   })} 
  //   }
  //   )
  // }

  addCompletedClimb = (e, climb) => {
    e.stopPropagation()
    console.log(`I climbed ${climb.name}`)
    fetch(API + `/climbs`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          mp_id: climb.id,
          name: climb.name
      })
      })
      .then(res => res.json())
      .then(climb => this.createCompletedUserClimb(climb))
  }

  createCompletedUserClimb = (climb) => {
    fetch('http://localhost:3000/completed_climbs', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.state.userID,
        climb_id: climb.id
      })
    })
    .then(res => res.json())
    // .then(favorite => {if(!this.state.currentUserFavorites.find(favorite => favorite.organism_id === organism.id)) {
    //   alert("Successfully added to favorites!")
    //   this.setState({
    //   currentUserFavorites: [...this.state.currentUserFavorites, favorite]
    // })} 
    // }
    // )
    .then(console.log)
  }


  render() {
    return (
        <div className="App">
          <NavBar user={this.state.user} handleLogOut={this.handleLogOut} fetchUserCrags={this.fetchUserCrags}/>
          <SearchBar handleSearchSubmit={this.handleSearchSubmit} user={this.state.user} searchTerm={this.state.searchTerm} props={this.props} climbs={this.state.climbs}/>
          {/* <CragsContainer crags={this.state.crags} handleClick={this.handleCragClick} /> */}
          <Switch>
          {/* <Route path='/' render={() => <SearchBar handleSearchSubmit={this.handleSearchSubmit} user={this.state.user} searchTerm={this.state.searchTerm} />} /> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/log-in' render={() => <LogIn handleLogIn={this.handleLogIn} />} />
          <Route exact path='/sign-up' render={() => <SignUp handleSignUp={this.handleSignUp} />} />
          <Route exact path='/:search' render={() => <CragsContainer crags={this.state.crags} handleClick={this.handleCragClick} handleAddFavorite={this.handleAddFavorite} handleDeleteFavorite={this.handleDeleteFavorite} userCrags={this.state.userCrags} user={this.state.user}/>} />
          <Route exact path='/crag/:name' render={() => <ClimbsContainer climbs={this.state.climbs} handleClick={this.handleClimbClick} addWishClimb={this.addWishClimb} addCompletedClimb={this.addCompletedClimb} user={this.state.user}/>} />
          <Route exact path='/climb/:name' render={() => <ClimbInfo climb={this.state.selectedClimb} />} />
          <Route exact path={`/${this.state.user}/my-crags`} render={() => <UserCragsContainer crags={this.state.displayUserCrags} handleClick={this.handleCragClick} handleDeleteFavorite={this.handleDeleteFavorite} user={this.state.user}/>} />
          {/* {(this.state.searchTerm !== "") ? <Route path={`/search?${this.state.searchTerm}`} render={() => <CragsContainer crags={this.state.crags} />} /> : <p>No Crags</p>} */}
          </Switch>
        </div>
    );
  } 
}

export default withRouter(App);
