import React, { Component } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
    const {name, user, votes, handleSelect, handleDeselect} = this.props
    const userHasSelected = votes && Object.keys(votes).includes(user.uid)
    return (
      <article className="Restaurant">
      <h3 className="Restaurant--name">{ name }</h3>
      <ul>
        {votes && map(votes, (vote, key) => <li key={key}> {vote} </li>)}
      </ul>
      {
        userHasSelected
        ?
        <button className='destructive'
        onClick={handleDeselect}
        >
         Nah, nevermind
       </button>
       :
       <button
       onClick={handleSelect}
       >
        Yeah, I'd go there 
 
       </button>
      }
      </article>
    );
  }
}



export default Restaurant;
