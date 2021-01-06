import firebase from 'firebase/app'; //firebase has all of the utility libraries but we don't want any which we are not using;
import 'firebase/firestore'; //Run the modules{firestore} global code, but doesn't actually import any values.
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDNb96QUGrCFInsUa3ZyFgeYex9SIqOmM4",
  authDomain: "e-commerce-db-70094.firebaseapp.com",
  projectId: "e-commerce-db-70094",
  storageBucket: "e-commerce-db-70094.appspot.com",
  messagingSenderId: "63066293929",
  appId: "1:63066293929:web:f3f6a7b4acf028c1a80bb8",
  measurementId: "G-R3DHJXQXHG"
}

firebase.initializeApp(config);
//configuring 
//need for google authentication 

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;