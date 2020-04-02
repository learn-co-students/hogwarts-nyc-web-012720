import React, { Fragment } from "react";
import Hog from "./hog.js"

class HelloWorld extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <div>
          {this.props.hogs.map(hog => {return <Hog key={hog.name} data={hog}/>})}
        </div>
      </div>
    );
  }
}

export default HelloWorld;
