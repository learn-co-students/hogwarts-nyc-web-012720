import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import PigCard from "./PigCard"

class App extends Component {

  state= {
    filter:false,
    sort: "name"
  }

  renderPigs = () => {
    let filteredhogs = hogs

    if (this.state.filter) {
      filteredhogs = hogs.filter(pig => pig.greased)
    } 

    filteredhogs.sort( (a,b) => a[this.state.sort] < b[this.state.sort] ? 1 : -1)

    return filteredhogs.map((pig) => {
      return <PigCard
      name={pig.name}
      specialty={pig.specialty}
      greased={pig.greased}
      weight={pig.weight} 
      hma={pig['highest medal achieved']}
      />
    });
  }

  handleClick = (event) => {
    this.setState({filter: !this.state.filter})
  }

  handleSortClick = (event) => {
    this.setState({sort: this.state.sort==="name"? "weight" : "name"})
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <div>
        <button type="button" onClick={this.handleSortClick}>Filtering by {this.state.sort}</button>
        <button type="button" onClick={this.handleClick}>Only Greased Pigs</button>
        {this.renderPigs()}
        </div>
      </div>
    );
  }
}

export default App;
