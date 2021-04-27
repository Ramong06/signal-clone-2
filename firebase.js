import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6ByfYOBUL3ozxL46wbQfrbzwuGWJ-pv0",
  authDomain: "signal-clone-2-c73fc.firebaseapp.com",
  projectId: "signal-clone-2-c73fc",
  storageBucket: "signal-clone-2-c73fc.appspot.com",
  messagingSenderId: "703030466188",
  appId: "1:703030466188:web:ce3bbd03104e6b74738da9"
};

// This is for regular React apps NOT React Native apps
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// This is for React Native apps
let app;

// If the app has not been initialized
if (firebase.apps.length === 0) {
  // change the app variable
  app = firebase.initializeApp(firebaseConfig)
  // Else use the firebase app that is already initialized
} else {
  // changes app variable to initialized firebase app
  app = firebase.app();
}