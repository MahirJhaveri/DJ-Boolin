
import React from 'react';
import {Link} from 'react-router';

import '../Stylesheets/Header.css';

export default class Header extends React.Component{
  render(){
    return (
      <div className='Header'>
        <h1 id="title">DJ Boolin'</h1>
        <div className='Navbar'>
          <Link to='/home'><button className='Link'>Home</button></Link>
          <Link to='/collections'><button className='Link'>Collections</button></Link>
        </div>
      </div>
    );
  }
};
