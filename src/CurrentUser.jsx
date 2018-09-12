import React from 'react';
import { auth } from './firebase';
import './CurrentUser.css';

const CurrentUser = ({ user}) => {
  return (
    <div className="CurrentUser">
      <img
        className="CurrentUser-photo"
        src={user.photoURL}
        alt={user.displayName}
      />
      {user.displayName}
      <div className='CurrentUser-identification'>

      </div>
    </div>
  );
};




export default CurrentUser;
