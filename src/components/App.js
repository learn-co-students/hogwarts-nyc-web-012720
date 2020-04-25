import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import FilterBar from "./FilterBar";

class App extends Component {
  state = {
    hogs: hogs, 
    onlyGreased: false, 
    sort: "unsorted"
  }

  toggleGreased = () => {
    this.setState({
      onlyGreased: !this.state.onlyGreased
    })
  }

  changeSortBy = (event) => {
    this.setState({ sort: event.target.value })
  }

  render() {
    let displayedHogs = [...this.state.hogs]
    if (this.state.onlyGreased) {
      displayedHogs = displayedHogs.filter(hog => hog.greased)
    }
    if (this.state.sort === "weight") {
      displayedHogs.sort( (hogA, hogB) => hogA.weight - hogB.weight)
    } else if (this.state.sort === "alphabetical") {
      displayedHogs.sort( (hogA, hogB) => hogA.name.toLowerCase() > hogB.name.toLowerCase() ? 1 : -1)
    }

    return (
      <div className="App">
        <Nav />
        <FilterBar
          toggleGreased={this.toggleGreased}
          onlyGreased={this.state.onlyGreased}
          changeSortBy={this.changeSortBy}
          sort={this.state.sort}
        />
        <HogContainer hogs={displayedHogs} />
      </div>
    );
  }
}

export default App;

