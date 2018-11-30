
import React from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Collections from './Collections.js';
import Player from './Player.js';

import '../Stylesheets/App.css';

export default class App extends React.Component{
  render(){
    var props = this.props;
    var collection = props.params.collection;

    return (
      <div className='App'>
        <Header />
        <div className='route_data'>
          {(props.location.pathname === '/') ? <Home /> :
          (props.location.pathname === '/home') ? <Home /> :
          (props.location.pathname === '/collections') ? <Collections /> :
          (props.location.pathname === '/player/' + collection) ? <Player collection={this.props.params.collection} /> :
          <h1>Error - {props.location.pathname} </h1>}
        </div>
      </div>
    );
  }
};
