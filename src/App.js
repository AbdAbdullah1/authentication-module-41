import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';

firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name:'',
    email:'',
    photo:''
  })


  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn =() =>{
     firebase.auth().signInWithPopup(provider)
     .then(res => {
       const {displayName, photoURL, email} = res.user
       console.log(displayName, email, photoURL);
     })
     .catch(err => {
       console.log(err);
       console.log(err.mesage);
     })
  }

  return (
    <div className="App">
      <h1>the</h1>
      <p>headmaster</p>
      <button onClick={handleSignIn}> Sign in </button>
    </div>
  );
}

export default App;
