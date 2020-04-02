import React from 'react';

const HogDetail = props => { 
    return (
        <div>
            <p>Specialty: {props.hog.specialty}</p>
            <p>{props.hog.greased ? "Greased" : "Not Greased"}</p>
            <p>Weight: {props.hog.weight}</p>
            <p>Highest Medal Achieved: {props.hog['highest medal achieved']}</p>
        </div>
    )
}

export default HogDetail