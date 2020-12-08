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
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import NotFound from './components/NotFound';

const API = 'http://localhost:3000';

class App extends Component {

  state = {
    user: null,
    userID: null,
    crags: [],
    userCrags: [],
    completedClimbs: [],
    wishClimbs: [],
    displayCompletedClimbs: [],
    displayWishClimbs: [],
    climbs: [],
    searchTerm: "",
    selectedClimb: "",
    displayUser: null,
    currentCrag: null
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token')
    if (token) {
      fetch(API + '/profile',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    .then(res => res.json())
    .then(({user, displayUser}) => {
      // localStorage.setItem("token", token)
      if (!user) {
        localStorage.removeItem('token')
      }
      this.setState({user: user.username, userID: user.id, userCrags: user.crags, completedClimbs: user.climbs_done, wishClimbs: user.climbs_want, displayUser: displayUser}, ()  =>{
        this.props.history.push(`/user/${user.username}`)
      })
    })
    }
  }

  handleLogIn = (info) => {  
    
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
    .then(({user, token, displayUser}) => {
      localStorage.setItem("token", token)
      this.setState({user: user.username, userID: user.id, userCrags: user.crags, completedClimbs: user.climbs_done, displayUser: displayUser}, ()  =>{
        this.props.history.push(`/user/${user.username}`)
      })
    })
  }

  handleSignUp = e => { 
    fetch('http://localhost:3000/register',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value,
        name: e.target[2].value,
        profile_pic: e.target[3].value,
        location: e.target[4].value,
        bio: e.target[5].value
        
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({user: data.user, token: data.token})
    })
  }

  handleLogOut = () => {
    this.setState({
      user: null,
      userID: null,
      crags: [],
      userCrags: [],
      completedClimbs: [],
      wishClimbs: [],
      displayCompletedClimbs: [],
      displayWishClimbs: [],
      climbs: [],
      searchTerm: "",
      selectedClimb: "",
      displayUser: null,
      currentCrag: null
    })
    localStorage.clear()
  }

  deleteUser = () => {
    const token = localStorage.getItem('token')
    fetch(API + `/users/${this.state.userID}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`
    }})
    this.handleLogOut()
    this.props.history.push('/')
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
        let sorted_crags = crags.sort((a, b) => (a.name > b.name) ? 1 : -1)
        this.setState({crags: sorted_crags, searchTerm: e.target[0].value});
        this.props.history.push(`/search?=${this.state.searchTerm}`)
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
        this.setState({climbs: climbs.routes, currentCrag: crag})
        this.props.history.push(`/crag/${crag.name.split(' ').join('-')}`)
    })
  }

  handleClimbClick = (climb) => {
    this.setState({selectedClimb: climb})
    this.props.history.push(`/climb/${climb.name.split(' ').join('-')}`)
  }
  
  fetchCompletedClimbs = () => {
    const token = localStorage.getItem('token')
    fetch(API + `/get_climbs_by_id`, {
      method: "GET",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
      },
      })
      .then(res => res.json())
      .then(climbs => this.setState({
        displayCompletedClimbs: climbs
      }))
  }

  fetchTargetClimbs = () => {
    const token = localStorage.getItem('token')
    fetch(API + `/get_target_climbs_by_id`, {
      method: "GET",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
      },
      })
      .then(res => res.json())
      .then(climbs => this.setState({
        displayWishClimbs: climbs
      }))
  }

  handleAddFavorite = (e, crag) => {
    e.stopPropagation()
    console.log(crag.id)
    const token = localStorage.getItem('token')
    fetch(API + `/user_crags`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
          crag_id: crag.id
      })
      })
      .then(res => res.json())
      .then(crag =>
        this.setState({
        userCrags: [...this.state.userCrags, crag]
      }))
  }

  handleDeleteFavorite = (e, crag) => {
    // let targetCrag = this.state.userCrags.filter(c => c.id === crag.id)
    // console.log(targetCrag[0].id)
    // targetCrag[0].id
    const token = localStorage.getItem('token')
    e.stopPropagation()
    fetch(API + `/user_crags/${crag.id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`
    }})
    this.setState({
      userCrags: this.state.userCrags.filter(c => c.id !== crag.id)
      // displayUserCrags: this.state.displayUserCrags.filter(c => c !== crag)
    })
  }

  addWishClimb = (e, climb) => {
    e.stopPropagation()
    const token = localStorage.getItem('token')
    console.log(climb)
    fetch(API + `/climbs`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
          mp_id: climb.id,
          name: climb.name
      })
      })
      .then(res => res.json())
      .then(climb => this.createTargetUserClimb(climb))
      // .then(climb => this.createWishListClimb(climb))
  }

  createTargetUserClimb = (climb) => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3000/target_climbs', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        climb_id: climb.id
      })
    })
    .then(res => res.json())
    .then(c => this.setState({
      wishClimbs: [...this.state.wishClimbs, c]
    }))
  }

  deleteWishClimb = (e, climb) => {
    const token = localStorage.getItem('token')
    e.stopPropagation()
    fetch(API + `/target_climbs/${climb.id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`
    }})
    this.setState({
      wishClimbs: this.state.wishClimbs.filter(c => c.mp_id !== climb.id),
      displayWishClimbs: this.state.displayWishClimbs.filter(c => c.id !== climb.id)
    })
  }

  addCompletedClimb = (e, climb) => {
    e.stopPropagation()
    const token = localStorage.getItem('token')
    console.log(`I climbed ${climb.name}`)
    fetch(API + `/climbs`, {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
          mp_id: climb.id,
          name: climb.name
      })
      })
      .then(res => res.json())
      .then(climb => {
        this.createCompletedUserClimb(climb)})
  }

  // deleteCompletedClimb = (e, climb) => {
  //   e.stopPropagation()
  //   console.log(`I climbed ${climb.name}`)
  // }
  

  createCompletedUserClimb = (climb) => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3000/completed_climbs', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
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
    .then(c => this.setState({
      completedClimbs: [...this.state.completedClimbs, c]
    }))
  }

  deleteCompletedClimb = (e, climb) => {
    const token = localStorage.getItem('token')
    e.stopPropagation()
    fetch(API + `/completed_climbs/${climb.id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`
    }})
    this.setState({
      completedClimbs: this.state.completedClimbs.filter(c => c.mp_id !== climb.id),
      displayCompletedClimbs: this.state.displayCompletedClimbs.filter(c => c.id !== climb.id)

    })
    // this.setState({
    //   userCrags: this.state.userCrags.filter(c => c.id !== crag.id)
      // displayUserCrags: this.state.displayUserCrags.filter(c => c !== crag)
    // })
  }

  displayEditPage = () => {
    this.props.history.push(`/${this.state.user}/edit-profile`)
  }

  editProfile = (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    fetch(`http://localhost:3000/users/${this.state.userID}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        profile_pic: e.target[2].value,
        bio: e.target[4].value,  
        location: e.target[3].value,
        username: e.target[0].value,
        name: e.target[1].value
      })
    })
    .then(res => res.json())
    .then(user => {
      this.setState({
      user: user.username,
      userID: user.id,
      displayUser: user
    })
    this.props.history.push(`/${this.state.user}/profile`)
  })
  }
    
  handleSelectChange = (e) => {
    console.log(e)
    console.log(this.props.history.location.pathname)
    if (e.target.value === 1) {
      if (this.props.history.location.pathname == `/${this.state.user}/climbs-log`) {
        this.setState({
          displayCompletedClimbs: this.state.displayCompletedClimbs.sort((a, b) => (a.stars < b.stars) ? 1 : -1)
        })
      } else {
        this.setState({
          climbs: this.state.climbs.sort((a, b) => (a.stars < b.stars) ? 1 : -1)
        })
      }
    } else if (e.target.value === 2) {
      if (this.props.history.location.pathname == `/${this.state.user}/climbs-log`) {
        this.setState({
          displayCompletedClimbs: this.state.displayCompletedClimbs.sort((a, b) => (a.stars > b.stars) ? 1 : -1)
        })
      } else {
        this.setState({
          climbs: this.state.climbs.sort((a, b) => (a.stars > b.stars) ? 1 : -1)
        })
      }
    } else if (e.target.value === 3) {
      if (this.props.history.location.pathname == `/${this.state.user}/climbs-log`) {
        this.setState({
          displayCompletedClimbs: this.state.displayCompletedClimbs.sort((a, b) => (a.starVotes < b.starVotes) ? 1 : -1)
        })
      } else {
        this.setState({
          climbs: this.state.climbs.sort((a, b) => (a.starVotes < b.starVotes) ? 1 : -1)
        })
      }
    } else if (e.target.value === 4) {
      if (this.props.history.location.pathname == `/${this.state.user}/climbs-log`) {
        this.setState({
          displayCompletedClimbs: this.state.displayCompletedClimbs.sort((a, b) => (a.starVotes > b.starVotes) ? 1 : -1)
        })
      } else {
        this.setState({
          climbs: this.state.climbs.sort((a, b) => (a.starVotes > b.starVotes) ? 1 : -1)
        })
      }
    } else if (e.target.value === 5) {
      if (this.props.history.location.pathname == `/${this.state.user}/climbs-log`) {
        this.setState({
          displayCompletedClimbs: this.state.displayCompletedClimbs.sort((a, b) => (a.name > b.name) ? 1 : -1)
        })
      } else {
        this.setState({
          climbs: this.state.climbs.sort((a, b) => (a.name > b.name) ? 1 : -1)
        })
      }
    } else if (e.target.value === 6) {
      if (this.props.history.location.pathname == `/${this.state.user}/climbs-log`) {
        this.setState({
          displayCompletedClimbs: this.state.displayCompletedClimbs.sort((a, b) => (a.name < b.name) ? 1 : -1)
        })
      } else {
        this.setState({
          climbs: this.state.climbs.sort((a, b) => (a.name < b.name) ? 1 : -1)
        })
      }
    }
  }

  // handleRefreshClimbs = () => {
  //   fetch(API + `/get_climbs`, {
  //     method: "POST",
  //     headers: {
  //         "Accept": "application/json",
  //         "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //         lat: this.state.currentCrag.lat,
  //         lon: this.state.currentCrag.lon
  //     })
  //     })
  //     .then(res => res.json())
  //     .then(climbs => {
  //       if (this.props.history.location.pathname == `/${this.state.user}/climbs-log`) {
  //         this.setState({displayCompletedClimbs: this.state.displayCompletedClimbs.routes}) 
  //       } else if (this.props.history.location.pathname == `/${this.state.user}/wish-climbs`) {
  //         this.setState({displayWishClimbs: this.state.displayWishClimbs.routes})
  //       } else {
  //         this.setState({climbs: climbs.routes})
  //       }
  //     })
  // }
  

  handleDisciplineChange = (e) => {
    // this.handleRefreshClimbs()
    if (e.target.value === 1) {
      if (this.props.history.location.pathname == `/${this.state.user}/climbs-log`) {
        this.setState({
          displayCompletedClimbs: this.state.displayCompletedClimbs.filter(c => c.type === "Boulder")
        })
      } else {
        this.setState({
          climbs: this.state.climbs.filter(c => c.type === "Boulder")
        })
      }
    } else if (e.target.value === 2) {
      if (this.props.history.location.pathname == `/${this.state.user}/climbs-log`) {
        this.setState({
          displayCompletedClimbs: this.state.displayCompletedClimbs.filter(c => c.type === "Sport")
        })
      } else {
        this.setState({
          climbs: this.state.climbs.filter(c => c.type === "Sport")
        })
      }
    } else if (e.target.value === 3) {
      if (this.props.history.location.pathname == `/${this.state.user}/climbs-log`) {
        this.setState({
          displayCompletedClimbs: this.state.displayCompletedClimbs.filter(c => c.type === "Trad")
        })
      } else {
        this.setState({
          climbs: this.state.climbs.filter(c => c.type === "Trad")
        })
      }
    }
  }

  
  // closeOverlay = (e) => {
  //   e.stopPropagation()
  //   this.props.history.push('/')
  // }

  render() {
    return (
        <div className="App">
          <NavBar user={this.state.user} userInfo={this.state.displayUser} handleLogOut={this.handleLogOut} fetchCompletedClimbs={this.fetchCompletedClimbs} fetchTargetClimbs={this.fetchTargetClimbs}/>
          <SearchBar handleSearchSubmit={this.handleSearchSubmit} fetchProfile={this.fetchProfile} user={this.state.user} searchTerm={this.state.searchTerm} props={this.props} climbs={this.state.climbs}/>
          
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path={`/user/${this.state.user}`} />
            <Route exact path='/log-in' render={() => <LogIn handleLogIn={this.handleLogIn} />} />
            <Route exact path='/sign-up' render={() => <SignUp handleSignUp={this.handleSignUp} />} />
            <Route exact path='/:search' render={() => <CragsContainer crags={this.state.crags} handleClick={this.handleCragClick} handleAddFavorite={this.handleAddFavorite} handleDeleteFavorite={this.handleDeleteFavorite} userCrags={this.state.userCrags} user={this.state.user}/>} />
            <Route exact path='/crag/:name' render={() => <ClimbsContainer climbs={this.state.climbs} handleClick={this.handleClimbClick} addWishClimb={this.addWishClimb} deleteWishClimb={this.deleteWishClimb} wishClimbs={this.state.wishClimbs} addCompletedClimb={this.addCompletedClimb} deleteCompletedClimb={this.deleteCompletedClimb} completedClimbs={this.state.completedClimbs} handleSelectChange={this.handleSelectChange} handleDisciplineChange={this.handleDisciplineChange} user={this.state.user}/>} />
            <Route exact path='/climb/:name' render={() => <ClimbInfo climb={this.state.selectedClimb} />} />
            <Route exact path={`/${this.state.user}/my-crags`} render={() => <UserCragsContainer crags={this.state.userCrags} handleClick={this.handleCragClick} handleDeleteFavorite={this.handleDeleteFavorite} user={this.state.user}/>} />
            <Route exact path={`/${this.state.user}/climbs-log`} render={() => <ClimbsContainer climbs={this.state.displayCompletedClimbs} handleClick={this.handleClimbClick} addWishClimb={this.addWishClimb} deleteWishClimb={this.deleteWishClimb} wishClimbs={this.state.wishClimbs} addCompletedClimb={this.addCompletedClimb} deleteCompletedClimb={this.deleteCompletedClimb} completedClimbs={this.state.completedClimbs} handleSelectChange={this.handleSelectChange} handleDisciplineChange={this.handleDisciplineChange} user={this.state.user}/>} />
            <Route exact path={`/${this.state.user}/wish-list`} render={() => <ClimbsContainer climbs={this.state.displayWishClimbs} handleClick={this.handleClimbClick} addWishClimb={this.addWishClimb} deleteWishClimb={this.deleteWishClimb} wishClimbs={this.state.wishClimbs} addCompletedClimb={this.addCompletedClimb} deleteCompletedClimb={this.deleteCompletedClimb} completedClimbs={this.state.completedClimbs} handleSelectChange={this.handleSelectChange} handleDisciplineChange={this.handleDisciplineChange} user={this.state.user}/>} />
            <Route exact path={`/${this.state.user}/profile`} render={() => <Profile user={this.state.displayUser} displayEditPage={this.displayEditPage} deleteUser={this.deleteUser} />} />
            <Route exact path={`/${this.state.user}/edit-profile`} render={() => <EditProfile user={this.state.displayUser} editProfile={this.editProfile}/>} />
            <Route render={() => <NotFound />} />
          </Switch>
        </div>
    );
  } 
}

export default withRouter(App);
