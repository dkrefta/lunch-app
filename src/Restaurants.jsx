import React, { Component } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import './Restaurants.css';
import {database} from './firebase'

class Restaurants extends Component {
  

  handleSelect(key) {
    const currentUser = this.props.user
    database.ref('/restaurants')
    .child(key)
    .child('votes')
    .child(currentUser.uid)
    .set(currentUser.displayName);

  }

  handleDeselect(key) {
    const currentUser = this.props.user
    database.ref('/restaurants')
    .child(key)
    .child('votes')
    .child(currentUser.uid)
    .remove();

  }

  render () {
    const {restaurants } = this.props;
    return (
      <section className="Restaurants">
      {map(restaurants, (restaurant, key) => 
      <Restaurant 
      key={key} 
      {...restaurant}
      handleSelect={() => this.handleSelect(key)}   
      handleDeselect={() => this.handleDeselect(key)}   
      />
      )}
      </section>
    );
  }
}

export default Restaurants;
