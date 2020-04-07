import React, { Fragment, Component } from "react";
import HogTile from './HogTile'

const HogContainer = props => {

  const renderHog = () => { 
    return props.hogs.map((hog, index) => <HogTile key={index} hog={hog} hidePig={props.hidePig} />)
  }
 
    return (
      <div>
        <h1>Prize-Winning Hogs</h1>
        {renderHog()}
      </div>
    );

}

export default HogContainer;
