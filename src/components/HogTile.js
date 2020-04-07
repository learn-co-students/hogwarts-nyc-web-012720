import React, { Fragment, Component } from "react";

class HogTile extends Component {

  state = {
    details: false, 
  }

  showHideDetails = () => {
    this.setState({ details: !this.state.details})
  }

  renderDetails = () => {
    return <div>
    <h5>Specialty: {this.props.hog.specialty}</h5> 
    <h5>Greased: {this.props.hog.greased.toString()}</h5> 
    <h5>Weight: {this.props.hog.weight}</h5> 
    <h5>Highest Medal Achieved: {this.props.hog["highest medal achieved"]}</h5> 
  </div>
  }

  showHideButton = () => {
    return  <div><button onClick={() => this.props.hidePig(this.props.hog.name)} >Hide</button></div>
  }

  render() {
    return (
      <div className="pigTile">
        <h1>{this.props.hog.name}</h1>
        <img onClick={this.showHideDetails} src={`/hog-imgs/${this.props.hog.name.toLowerCase().split(" ").join("_")}.jpg`}/>
        {this.state.details ? this.renderDetails() : this.showHideButton()}
      </div>
    );
  }

}

export default HogTile;
