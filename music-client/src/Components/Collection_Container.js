
import React from 'react';
import {Link} from 'react-router';

import '../Stylesheets/Collection_Container.css';

export default class CollectionContainer extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="CollectionContainer">
        <Link to={'/player/' + this.props.name}>
          <button className="CollectionContainerButton">
            {this.props.name}
          </button>
        </Link>
      </div>
    );
  }

};
