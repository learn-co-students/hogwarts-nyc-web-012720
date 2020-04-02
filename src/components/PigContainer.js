import React from "react";
import hogs from "../porkers_data";
import PigCard from "./PigCard";
import FilterBar from "./FilterBar";

class PigContainer extends React.Component {
  state = {
    hogs: hogs,
    greased: false,
    searchTerm: ""
  }

  handleFilterChoice = (event) => {
    this.setState({
      [event.target.name]: [event.target.value]
    })
  }

  renderPigTiles = () => {
    let pigsToRender = this.state.hogs;

    if (this.state.greased) {
      pigsToRender = pigsToRender.filter(pig => pig.greased === true)
    } 
    
    return pigsToRender
      .filter(pig => pig.name.includes(this.state.searchTerm))
      .map(hog => {
      return <PigCard
        key={hog.index}
        name={hog.name}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        medal={hog['highest medal achieved']}
             />
    })
  }

  toggleGreased = () => {
    this.setState({greased: !this.state.greased})
  }

  render() {
    return (
      <div>
        <FilterBar
          toggleGreased={this.toggleGreased}
          handleFilterChoice={this.handleFilterChoice} />
        {this.renderPigTiles()}
      </div>
    );
  }
}

export default PigContainer;
