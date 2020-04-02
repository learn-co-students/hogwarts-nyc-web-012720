import React, { Fragment } from "react"; 


class HogsCard extends React.Component {
    constructor() {
        super()

        this.state = {
            clicked: false
        }
    }

    handleName = name => {
        let editedName = name.toLowerCase().split(" ").join("_")
        editedName = editedName + `.jpg`
        return editedName
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    

  render() {
    // let imgSrc = `../hogs-img/${this.handleName(this.props.name)}`
    return (
      <div onClick={this.handleClick} className= "ui eight wide column">
        <h1>{this.props.name}</h1>
        <img src={`hog-imgs/${this.handleName(this.props.name)}`} />
        {this.state.clicked ? 
        <div> 
            <p>Specialty: {this.props.specialty}</p> 
            <p>Weight: {this.props.weight}</p> 
            <p>Greased: {this.props.greased ? "greased" : "not greased" }</p>
            <p>Highest Medal Achieved: {this.props.highestMedalAchieved} </p>
        </div> : null}
      </div>
    );
  }
}

export default HogsCard;