import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";

class App extends Component {

  state = {
    greased: false
  }

  renderHogs = () => {
    return hogs.map( (hog, index) => 
      <HelloWorld 
        key={index}
        name={hog.name}
        greased={hog.greased}
        weight={hog.weight}
        highest_medal={hog['highest medal achieved']}
      />
    )
  }

  toggleGreased = () => {
    this.setState ({
      greased: !this.state.greased
    })
  }

  renderGreased = () => {
    const greasedHogs = hogs.filter( hog => hog.greased)
    return greasedHogs.map( (hog, index) => {
      // console.log(hog.greased)
      <HelloWorld 
        key={index}
        name={hog.name}
        greased={hog.greased}
        weight={hog.weight}
        highest_medal={hog['highest medal achieved']}
      />
    }
    )
  }

  render() {
    console.log(this.renderGreased())
    return (
      <div className="App">
        <Nav />
        <button onClick={this.toggleGreased}>Greased</button>
        {/* {this.renderGreased()} */}
        {this.state.greased ? this.renderGreased() : this.renderHogs()}
      </div>
    );
  }
}

export default App;