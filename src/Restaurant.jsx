import React, { Component } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const {name, handleSelect, handleDeselect} = this.props
    return (
      <article className="Restaurant">
      <h2 className="Restaurant--name">{ name }</h2>
      <button
      onClick={handleSelect}
      >
      Yeah, I'd go there 

      </button>
      <button className='destructive'
      onClick={handleDeselect}
      >
      Nah, nevermind

      </button>
      </article>
    );
  }
}



export default Restaurant;
