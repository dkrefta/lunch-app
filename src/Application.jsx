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
      const {restaurants} = this.state

     await auth.onAuthStateChanged((currentUser, user) => {
       console.log('auth', currentUser)
       console.log(currentUser.displayName)
      this.setState({
        currentUser
      })
      database.ref('restaurants').on('value', (snapshot) => {
        console.log(snapshot)
        this.setState({
          restaurants: snapshot.val()
        })
    })
    })
    
  }
  

  render() {

    const {user} = this.props
    const {currentUser, restaurants} = this.state
    console.log(restaurants)

    return (
      <div className="Application">
        <header className="Application--header">
          <h1>Lunch App</h1>
            </header>
          <div>
            {!currentUser && <SignIn />}
             {currentUser && 
            <div>
              <NewRestaurant restaurants={restaurants} />
              <Restaurants restaurants={restaurants} user={currentUser} />
              <CurrentUser user={currentUser} />
            </div>
            }
          </div>
      </div>
    );
  }
}

export default Application;
