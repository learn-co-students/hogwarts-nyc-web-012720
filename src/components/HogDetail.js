import React from 'react'

const HogDetail = (props) => {
    return (
        <div className="hogTile">
            <div>Specialty: {props.specialty}</div>
            <div>Weight: {props.weight}</div>
            <div>{props.greased ? "Greased" : "Not Greased"}</div>
            <div>Highest Medal Achieved: {props['highest medal achieved']}</div>
        </div>
    )
}

export default HogDetail;