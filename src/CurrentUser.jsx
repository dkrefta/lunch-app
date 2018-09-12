import React from 'react';
import { auth } from './firebase';
import './CurrentUser.css';

const CurrentUser = ({ user }) => {
  return (
    <div className="CurrentUser">
      <img
        className="CurrentUser--photo"
        src={user.photoURL}
        alt={user.displayName}
      />
      {user.displayName}
      <div className='CurrentUser--identification'>
        <h3> {user.displayName}</h3>
        <p> {user.email}</p>
          <button
          onClick={() => auth.signOut()}
        > Sign Out 
        </button>
      </div>
    </div>
  );
};




export default CurrentUser;
