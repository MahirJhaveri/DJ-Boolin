
import React from 'react';
import '../Stylesheets/Home.css';

export default class Home extends React.Component{
  render(){
    return (
      <div className='Home'>
        <div className="b1">Lit online DJ, to whose beats you can bool to...</div>
        <div className="b1">Genre of your choice, music of ours.</div>
        <div className="b2">Click <u>Collections</u> above to check out some of our latest compilations of your favourite music.</div>
      </div>
    );
  }
};
