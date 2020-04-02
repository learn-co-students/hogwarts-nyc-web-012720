import React from "react";
import HogCard from "./HogCard"


const HogContainer = props => {
  
  const renderHogs = () => {
    return (props.hogs.map((hog,index) => 
      {
        return <HogCard key={index} hog={hog}/>
      })
      )
  }
  return (<div>{renderHogs()}</div>)
}

export default HogContainer;
