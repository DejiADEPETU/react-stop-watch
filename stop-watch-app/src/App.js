import './App.css';
import React, { Component } from "react";
import Stopwatch from "./components/Stopwatch";


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="TimeX">
          <Stopwatch />

        </div>
      </div>
    );
  }
}


