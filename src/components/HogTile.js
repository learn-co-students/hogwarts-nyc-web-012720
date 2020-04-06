import React from "react";

class HogTile extends React.Component {
  state = {
    showDeets: false,
  };

  formatName = (name) => {
    return name.toLowerCase().split(" ").join("_");
    //   return name.toLowerCase().replace(/ /g, "_");
  };

  handleClick = () => {
    this.setState({
      showDeets: !this.state.showDeets,
    });
  };

  render() {
    return (
      <div className="ui eight wide column" onClick={this.handleClick}>
        <div className="pigTile">
          <h4>Name: {this.props.pig.name}</h4>
          {this.state.showDeets ? (
            <div>
              <div> Specialty: {this.props.pig.specialty} </div>
              <div> Weight: {this.props.pig.weight} </div>
              <div>
                Highest Medal Achieved:{" "}
                {this.props.pig["highest medal achieved"]}
              </div>
              <div> Greased?: {this.props.pig.greased.toString()} </div>
            </div>
          ) : (
            <img
              src={`/hog-imgs/${this.formatName(this.props.pig.name)}.jpg`}
              alt="pig"
            />
          )}
          {/* {this.state.showDeets && (
            <div>
              <div> Specialty: {this.props.pig.specialty} </div>
              <div> Weight: {this.props.pig.weight} </div>
              <div>
                Highest Medal Achieved:{" "}
                {this.props.pig["highest medal achieved"]}
              </div>
              <div> Greased?: {this.props.pig.greased.toString()} </div>
            </div>
          )} */}
        </div>
      </div>
    );
  }
}

export default HogTile;
