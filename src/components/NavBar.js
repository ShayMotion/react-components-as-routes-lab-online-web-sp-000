import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
    <NacLink to="/" exact activeStyle={{
      background: 'pink'
    }}
    >Home</NavLink>
    
    <NavLink
    to="/movies"
    exact activeStyle={{
      background: 'pink'
    }}
    >Movies</NavLink>
    
    <NavLink
    to="/actors"
    exact activeStyle={{
      background: 'pink'
    }}
    >Actors</NavLink>
    </div>
  );
};

export default NavBar;
