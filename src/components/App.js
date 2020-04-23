import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogCard from './HogCard'
import Filters from "./Filters";

//HogCard
//HogDetail
 

class App extends Component {
  state = {
    hogs: hogs,
    onlyGreased: false,
    sort: 'unsorted'
  }

  toggleGreased = () => {
    this.setState({ onlyGreased: !this.state.onlyGreased})
  }

  changeSort = event => {
    this.setState({ sort: event.target.value})
  }

  render() {
    let displayedHogs = [...this.state.hogs] // made a copy of the sate, making sure we're not mutating the original
    
    if (this.state.onlyGreased) {
      displayedHogs = displayedHogs.filter(hog => hog.greased)
    } //conditionally resetting that copied array to a filtered version of it

    else if (this.state.sort === 'name'){
      displayedHogs.sort( (a,b) => a.name.localeCompare(b.name))
    } // ^ soring the copied array in alphabetical order
    
     else if (this.state.sort === 'weight') {
      displayedHogs.sort( (a, b) => a.weight - b.weight)
    } // ^ sorting the copied array in a acending order 

    return (
      <div className="App">
        <Nav />
         <Filters 
            greased={this.state.onlyGreased}
            toggleGreased={this.toggleGreased} 
            sort={this.state.sort}
            changeSort={this.changeSort}
          />
            {displayedHogs.map((hog, index) => <HogCard key={index} {...hog}/>)}
            {/* ^ this will take a single hog and give us a single HogCard.
            the spread operator {...hog} passes ALL of the information to the child component as individual props*/}
      </div>
    );
  }
}

export default App;