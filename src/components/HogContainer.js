import React from "react"
import Hog from "./Hog"

const HogContainer = props => {
    
    return (
        <div className="ui grid container">
            {props.hogs.map((hog, index) => <Hog key={index} {...hog}/>)}
        </div>
    )
}

export default HogContainer