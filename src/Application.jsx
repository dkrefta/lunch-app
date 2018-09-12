import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';
//const UserContext = React.createContext()



class Application extends Component {
  state = {
    currentUser: null,
  }

     async componentDidMount() {
     await auth.onAuthStateChanged((currentUser, user) => {
      console.log('AuthChange', currentUser)
      console.log(currentUser.displayName)
      this.setState({
        ...currentUser,
        currentUser: user
      })
    })
  }
  

  render() {
    console.log(this.state.currentUser)
    console.log(user)
    const {user} = this.props
    const currentUser = this.state
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch App</h1>
            </header>
          <div>
            {!currentUser && <SignIn />}
            {currentUser && 
            <div>
              <NewRestaurant/>
              <CurrentUser user={currentUser} />
            </div>
            }
          </div>
      </div>
    );
  }
}

export default Application;
