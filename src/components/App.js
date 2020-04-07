import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends React.Component {

  state = {
    hogs: hogs, 
    greased: false,
    sortName: false, 
    sortWeight: false, 
    hideHogs: []
  }

  filterHandler = () => {
    this.setState({ greased: !this.state.greased })
  }
  
  nameHandler = () => {
    this.setState({ sortName: !this.state.sortName})
  }
  
  weightHandler = () => {
    this.setState({ sortWeight: !this.state.sortWeight})
  }

  hidePig = (hogName) => {
    this.setState({ hideHogs: [...this.state.hideHogs, hogName]})
  }

  showAllAgain = () => {
    this.setState({ hideHogs: [] })
  }

  renderHogs = () => {
    let copiedHogs = [...this.state.hogs]
    this.state.greased ? copiedHogs = copiedHogs.filter(hog => hog.greased) : copiedHogs 
    this.state.sortName ? copiedHogs = copiedHogs.sort((a,b) => a.name > b.name ? 1 : -1) : copiedHogs
    this.state.sortWeight ? copiedHogs = copiedHogs = copiedHogs.sort((a,b) => a.weight > b.weight ? 1 : -1) : copiedHogs

    return copiedHogs.filter(hog => !this.state.hideHogs.includes(hog.name))
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <button onClick={this.showAllAgain}>Show All</button>
        <div>
          <button onClick={this.filterHandler}>{this.state.greased ? "Only Greased" : "Filter Greased"}</button>
        </div>
        <div>
          <button onClick={this.nameHandler}>{this.state.sortName ? "Sorted By Name" : "Sort By Name"}</button>
          <button onClick={this.weightHandler}>{this.state.sortWeight ? "Sorted By Weight" : "Sort By Weight"}</button>
        </div>
        <HogContainer hidePig={this.hidePig} hogs={this.renderHogs()} />
      </div>
    );
  }
}

export default App;
