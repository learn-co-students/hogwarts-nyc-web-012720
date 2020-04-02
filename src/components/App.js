import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import FilterBar from "./FilterBar"
import HogContainer from "./HogContainer";

class App extends Component {

  state = {
    hogs: hogs,
    greased: false,
    sortBy: "weight"
  }

  handleSelectChange = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }

  toggleGreased = () => {
    this.setState({
      greased: !this.state.greased
    })
  }

  filterGreasedHogs = () => {
    if (this.state.greased) {
      return this.state.hogs.filter(hog => hog.greased)
    }else 
    return this.state.hogs
    
  }

  sortHogs = () => {
    let filtered = this.filterGreasedHogs()
    if (this.state.sortBy === "weight"){
      return[...filtered].sort((pig1,pig2) => {
        return pig1.weight - pig2.weight
      })
    } if (this.state.sortBy === "name"){
      return [...filtered].sort((pig1,pig2) => {
        return pig1.name.localeCompare(pig2.name)
      })
    }
    else return filtered

  }


  render() {
    return (
      <div className="App">
        <Nav />
        {/* <button onClick={() => this.setState({sortBy: "", greased: false})}/> */}
        <FilterBar 
        toggleGreased={this.toggleGreased}
        handleSelectChange={this.handleSelectChange}
        greased={this.state.greased}
        sortBy={this.state.sortBy}/>
        <HogContainer hogs={this.sortHogs()}/>
        
        
      </div>
    );
  }
}

export default App;
