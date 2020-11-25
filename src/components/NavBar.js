import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ user }) => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/tick-lists"
      >
        Tick List
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/my-crags"
      >
        My Crags
      </NavLink>
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
        to={`/users/${user}`}
      >
        View Profile
      </NavLink>, 
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/log-out"
      >
        Log Out
      </NavLink>]
    }
    </div>
  );
}

export default NavBar;