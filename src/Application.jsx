import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewRestaurant from './NewRestaurant';
import Restaurants from './Restaurants';
import './Application.css';
import map from 'lodash/map'

//const UserContext = React.createContext()



class Application extends Component {
  state = {
    currentUser: null,
    restaurants: null
  }

     async componentDidMount() {
     const restaurantRef = database.ref('/restaurants')
     await auth.onAuthStateChanged((currentUser, user) => {
       console.log('auth', currentUser)
       console.log(currentUser.displayName)
      this.setState({
        currentUser
      })
        restaurantRef.once('value', (snapshot) => {
        this.setState({
          restaurants: snapshot.val()
        })
      })
    })
    
  }
  

  render() {
    const {user} = this.props
    const {currentUser, restaurants} = this.state
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
              <Restaurants restaurants={restaurants}/>
              <CurrentUser user={currentUser} />
            </div>
            }
          </div>
      </div>
    );
  }
}

export default Application;
