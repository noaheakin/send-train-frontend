import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, userInfo, handleLogOut, fetchCompletedClimbs, fetchTargetClimbs }) => {
  return (
    <div style={{ backgroundColor: '#0E6EB8', paddingTop: '10px', paddingBottom: '10px', marginBottom: '12px', height: '56px' }}>
      <Link class="ui blue button"
        style={{ marginLeft: '10px', marginRight: '10px', float: 'left' }} 
        to="/"
      >
        Home
      </Link> 
      {(user) ? [<Link onClick={() => fetchTargetClimbs()}
        class="ui blue button"
        style={{ marginRight: '10px', float: 'left' }} 
        to={`/${user}/wish-list`}
      >
        Wish List
      </Link>,
      <Link onClick={() => fetchCompletedClimbs()}
        class="ui blue button"
        style={{ marginRight: '10px', float: 'left' }} 
        to={`/${user}/climbs-log`}
      >
        Climbs Log
      </Link>,
      <Link
        class="ui blue button"
        style={{ marginRight: '10px', float: 'left' }} 
        to={`/${user}/my-crags`}
      >
        My Crags
      </Link>] : null}
      {(user === null) ? 
      [<Link 
        class="ui blue button"
        style={{ marginRight: '10px', float: 'right' }} 
        to="/sign-up"
      >
        Sign Up
      </Link>,
      <Link 
        class="ui blue button"
        style={{ marginRight: '10px', float: 'right' }} 
        to="/log-in"
      >
        Log In
      </Link> 
      ] :
      [<Link class="ui blue button"
      onClick={handleLogOut}
      style={{ marginRight: '10px', float: 'right' }} 
      to="/"
    >
      Log Out
    </Link>,
    <Link
        
        style={{ marginRight: '10px', float: 'right' }} 
        key={user}
        to={`/${user}/profile`}
      >
        {(userInfo.profile_pic === "") ? <img className="navProfilePic" height="37" width="37" src={process.env.PUBLIC_URL + '/images/default_profile.jpg'}/> : <img className="navProfilePic" height="37" width="37" src={userInfo.profile_pic} />}
      </Link> 
      ]
    }
    </div>
  );
}

export default NavBar;