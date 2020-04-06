import React from "react";
import hogs from "../porkers_data";
import HogTile from "./HogTile";

class HogContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      hogs: hogs,
      isGreased: false,
      // sortByName: false,
      // sortByWeight: false,
      sort: "name",
    };
  }

  renderPigs = () => {
    let pigsToRender = this.state.hogs;
    if (this.state.isGreased) {
      pigsToRender = pigsToRender.filter((pig) => pig.greased);
    }
    // if (this.state.sortByName) {
    //   pigsToRender = this.sortByName(pigsToRender);
    // }
    // if (this.state.sortByWeight) {
    //   pigsToRender = pigsToRender.sort((a, b) => a.weight - b.weight);
    // }

    pigsToRender.sort((a, b) => {
      return a[this.state.sort] > b[this.state.sort] ? 1 : -1;
    });
    return pigsToRender.map((pig, index) => {
      return <HogTile key={index} pig={pig} />;
    });
  };

  // sortByName = (pigs) => {
  //   return pigs.sort((a, b) => {
  //     const nameA = a.name.toUpperCase();
  //     const nameB = b.name.toUpperCase();
  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // };

  updateGrease = () => {
    this.setState({
      isGreased: !this.state.isGreased,
    });
  };

  // sort = (event) => {
  //   const value = parseInt(event.target.value, 10);
  //   if (value === 1) {
  //     this.setState({ sortByName: true });
  //   } else if (value === 2) {
  //     this.setState({ sortByWeight: true });
  //   } else if (value === 0) {
  //     this.setState({
  //       sortByName: false,
  //       sortByWeight: false,
  //     });
  //   }
  // };

  handleSort = () => {
    if (this.state.sort === "name") {
      this.setState({ sort: "weight" });
    } else if (this.state.sort === "weight") {
      this.setState({ sort: "name" });
    }
  };

  render() {
    console.log(this.state.hogs);
    return (
      <div>
        <div>
          <button onClick={this.updateGrease}>Filter by Greased</button>
          <button onClick={this.handleSort}>
            Sorted By: {this.state.sort}{" "}
          </button>
        </div>
        {/* <select onChange={this.sort}>
          <option value="0">None</option>
          <option value="1">Sort By Name</option>
          <option value="2">Sort By Weight</option>
        </select> */}
        <br></br>
        <br></br>
        <div className="ui grid container">{this.renderPigs()}</div>
      </div>
    );
  }
}

export default HogContainer;
