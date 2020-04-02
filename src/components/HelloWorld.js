import React, { Fragment } from "react";
import Hog from "./hog.js"

class HelloWorld extends React.Component {

  // fetchImages = () => {
  //   fetch(hogImg)
  //   .then(response => response.json())
  //   .then(images => {console.log(images)})
  // }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <div className="ui grid container">
          {/* {this.fetchImages()} */}
          {this.props.hogs.map(hog => {return <Hog key={hog.name} data={hog}/>})}
        </div>
      </div>
    );
  }
}

export default HelloWorld;
