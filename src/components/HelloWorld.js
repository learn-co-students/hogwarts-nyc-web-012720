import React from "react";
import HogContainer from "./HogContainer"

class HelloWorld extends React.Component {
  
  state = {
    filtered: false,
    sorted: "none"
  }

  filterGreased = () => {
    this.setState({
      filtered: !this.state.filtered
    })
  }

  handleChange = (event) => {
    this.setState({
      sorted: event.target.value
    })
  }

  render() {
    console.log("rendered")
    let displayHogs = [...this.props.hogs]
    if (this.state.filtered) {
      displayHogs = displayHogs.filter(hog => hog.greased)
    }
    if (this.state.sorted === "alphabetical") {
      displayHogs.sort((hogA, hogB) => hogA.name.toLowerCase() < hogB.name.toLowerCase() ? -1 : 1)
    }
    if (this.state.sorted === "weight") {
      displayHogs.sort((hogA, hogB) => hogA.weight - hogB.weight)
    }

    return (
      <div>
        <button onClick={this.filterGreased}>Greased filter on/off</button>
        <form>
          <label>Sort by:</label>
          <label>
            None
            <input type="radio" value="none" checked={this.state.sorted === "none"} onChange={this.handleChange}/>
          </label>
          <label>
            Alphabetical
            <input type="radio" value="alphabetical" checked={this.state.sorted === "alphabetical"} onChange={this.handleChange}/>
          </label>
          <label>
            Weight
            <input type="radio" value="weight" checked={this.state.sorted === "weight"} onChange={this.handleChange}/>
          </label>
        </form>
        <h1>Here are your pigs</h1>
        <HogContainer hogs={displayHogs}/>
      </div>
    );
  }
}

export default HelloWorld;
