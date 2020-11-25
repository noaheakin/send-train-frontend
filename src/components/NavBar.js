import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
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
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/log-in"
      >
        Log In
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/sign-up"
      >
        Sign Up
      </NavLink>
    </div>
  );
}

export default NavBar;