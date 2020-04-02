import React from 'react';

class PigCard extends React.Component {

    state ={
        clicked: false
    }

  constructor(props) {
    super(props);
  }

  imageLocation = () => {
      console.log(`hog-imgs/${this.props.name.replace(" ", "_").replace(" ", "_")}.jpg`)
      return `hog-imgs/${this.props.name.replace(" ", "_").replace(" ", "_")}.jpg`
  }

  handleClick = () =>{
      this.setState({clicked: !this.state.clicked})
  }

  renderDetails = () => {
      return(
          <div>
            <p>Specialty:{this.props.speciality}</p>
            <p>Weight: {this.props.weight}</p>
            <p>Highest Medal Achieved: {this.props.hma}</p>
          </div>
      )
  }

  render() {
    return (
      <div className="pigTile" onClick={this.handleClick}>
          <img src={this.imageLocation()} alt=""/>
          <p>Name: {this.props.name}</p>
          {this.state.clicked ? this.renderDetails() : null}
      </div>
    );
  }
}

export default PigCard;
