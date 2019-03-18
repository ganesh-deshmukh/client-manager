import React, { Component } from "react";
import { createStore, combineReducer, compose } from "redux";
import fiirebase from "firebase";
import "firebase/firestore";
import { firebaseReducer, reactReduxFirebase } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";

export default class store extends Component {
  render() {
    return (
      <div>
        <h1>store.js</h1>
      </div>
    );
  }
}
