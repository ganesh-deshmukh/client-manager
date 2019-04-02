// import React, { Component } from "react";
import { createStore, combineReducers, compose } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { firebaseReducer, reactReduxFirebase } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnoGiOD-JITxzzzUwF8Pz_EkKTyrOOICo",
  authDomain: "client-manager-webapp-in-react.firebaseapp.com",
  databaseURL: "https://client-manager-webapp-in-react.firebaseio.com",
  projectId: "client-manager-webapp-in-react",
  storageBucket: "client-manager-webapp-in-react.appspot.com",
  messagingSenderId: "795364303145"
};

// rrf= react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFireStoreForProfile: true
};

firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();

// rrf-enhancer
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

const initialState = {}; // to store settings locally

const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
