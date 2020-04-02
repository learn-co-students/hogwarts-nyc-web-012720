import React from 'react';

const FilterBar = (props) => {

    
    return <div>
            <label>Sort by</label>
            <div>
                <select 
                name="sort"
                value={props.sortBy}
                onChange={event => props.handleSelectChange(event)}>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>


            <label>Greased Pigs?</label>

            <div>
                <input 
                type="checkbox" 
                onChange={props.toggleGreased} 
                checked={props.greased}></input>
            </div>
        </div>
    
    

}

export default FilterBar