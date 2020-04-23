import React from 'react'

// state
// handleChange
// attaching state to value

const Filters = (props) => {
    // console.log(props)
    return (
        <div className="filters">
            <button onClick={props.toggleGreased}>{props.greased ? "Show All" :  "Show Only Greased"}</button>
            <select value={props.sort} onChange={event => props.changeSort(event)}>
                <option value="unsorted">Unsorted</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    )
}

export default Filters