import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyALLaT-wFhYUAvc9Sy30Dn0gTwC96EWB1g",
    authDomain: "my-eclouthing-db.firebaseapp.com",
    databaseURL: "https://my-eclouthing-db.firebaseio.com",
    projectId: "my-eclouthing-db",
    storageBucket: "my-eclouthing-db.appspot.com",
    messagingSenderId: "677448146263",
    appId: "1:677448146263:web:82d0620d7fbe34374ef212",
    measurementId: "G-3ERT3EYJ26"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;