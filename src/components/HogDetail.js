import React from "react"

const HogDetail = (props) => {
    return(
        <div>
            <h3>{props.specialty}</h3>
            <h3>{props.greased ? "Greased" : "Not Greased"}</h3>
            <h3>{props.weight}</h3>
            <h3>{props["highest medal achieved"]}</h3>
    </div>
    )
}

export default HogDetail