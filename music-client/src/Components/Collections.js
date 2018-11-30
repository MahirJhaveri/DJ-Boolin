
import React from 'react';

import CollectionContainer from './Collection_Container.js';

export default class Collections extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      collections : null,
      loading : true
    };
    this.displayCollection.bind(this);
  }

  displayCollection(){
    var state = this.state;
    var rows = [];
    for(var i = 0; i < state.collections.length; i++){
        rows.push(<CollectionContainer name={state.collections[i]}/>);
    }
    return(
      <div>
        {rows}
      </div>
    );
  }

  componentDidMount(){
    var state = this.state;
    fetch('http://10.105.226.212:8000/collectionTitles')
    .then(function(data){
      return data.json();
    })
    .then((obj) => {
      console.log(obj);
      state.collections = obj;
      state.loading = false;
      this.setState(state);
    })
  }

  render(){

    var state = this.state;

    return(
      <div>
        {(state.loading === true) ? <h1>Page is loading</h1> :
        (<div id="collections">{this.displayCollection()}</div>)}
      </div>
    );
  }
};
