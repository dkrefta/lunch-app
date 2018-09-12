import React, { Component } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const {name} = this.props
    return (
      <article className="Restaurant">
      <h3> {name} </h3>
      </article>
    );
  }
}



export default Restaurant;
