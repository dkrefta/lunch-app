import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAujCIWeqnAthAoOfJ-4Ra766fJ9115b_E",
    authDomain: "lunch-app-f5ef9.firebaseapp.com",
    databaseURL: "https://lunch-app-f5ef9.firebaseio.com",
    projectId: "lunch-app-f5ef9",
    storageBucket: "lunch-app-f5ef9.appspot.com",
    messagingSenderId: "27048862848"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
