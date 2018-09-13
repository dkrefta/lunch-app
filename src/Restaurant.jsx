import React, { Component } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const {name} = this.props
    return (
      <article className="Restaurant">
      <h2 className="Restaurant--name">{ name }</h2>
      </article>
    );
  }
}



export default Restaurant;
