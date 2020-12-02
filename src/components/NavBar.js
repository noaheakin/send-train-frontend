import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ user, handleLogOut, fetchUserCrags, fetchCompletedClimbs }) => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      {(user) ? [<NavLink 
        style={{ marginRight: '10px' }} 
        to={`/${user}/tick-lists`}
      >
        Tick List
      </NavLink>,
      <NavLink onClick={() => fetchCompletedClimbs()}
        style={{ marginRight: '10px' }} 
        to={`/${user}/climbs-log`}
      >
        Climbs Log
      </NavLink>,
      <NavLink onClick={() => fetchUserCrags()}
        style={{ marginRight: '10px' }} 
        to={`/${user}/my-crags`}
      >
        My Crags
      </NavLink>] : null}
      {(user === null) ? 
      [<NavLink 
        style={{ marginRight: '10px' }} 
        to="/log-in"
      >
        Log In
      </NavLink>, 
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/sign-up"
      >
        Sign Up
      </NavLink>] :
      [<NavLink 
        style={{ marginRight: '10px' }} 
        key={user}
        to={`/${user}/profile`}
      >
        View Profile
      </NavLink>, 
      <NavLink onClick={handleLogOut}
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Log Out
      </NavLink>]
    }
    </div>
  );
}

export default NavBar;