import React, { Fragment } from "react";


class HelloWorld extends React.Component {
  state= {
    clicked: false
  }
  
  
  cardFront = () => {
    const imgName = this.props.name.toLowerCase().split(' ').join('_')
    const imgSrc = require(`../hog-imgs/${imgName}.jpg`)

    return (
      <p>
        Name: {this.props.name}
        Image: <img src={imgSrc} alt=""/>
      </p>

    )
  }
  
  cardBack = () => {
    return (
      <p>
        Greased: {this.props.greased ? "True" : "False"}
        Weight : {this.props.weight}
        Highest Medal Achieved: {this.props['highest medal achieved']}
      </p>
    )

  }

  toggleClicked = () => {
    console.log(this.state)
    this.setState ({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div className="pigTile" onClick={this.toggleClicked}>
        {this.state.clicked ? this.cardBack() : this.cardFront()}
      </div>
    );
  }
}

export default HelloWorld;

