
import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogsContainer from "./HogsContainer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld />
        <HogsContainer hogs={hogs}/>
        
      </div>
    );
  }
}

export default App;