import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import PigCard from "./PigCard"

class App extends Component {

  renderPigs = () => {
    return hogs.map((pig) => {
      return <PigCard
      name={pig.name}
      specialty={pig.specialty}
      greased={pig.greased}
      weight={pig.weight} 
      hma={pig['highest medal achieved']}
      />
    });
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <div>
        {this.renderPigs()}
        </div>
      </div>
    );
  }
}

export default App;
