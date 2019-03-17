import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNavbar from "./components/layouts/AppNavbar";

class App extends Component {
  render() {
    console.log("testing");

    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <h1>App.jss</h1>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
