import React from 'react';

const FilterBar = props => {
   return (
   <div>
      <p onClick={props.toggleGreased}>Greased</p>
      <label>
         Search By Name: <input onChange={props.handleFilterChoice} value={props.searchTerm} type="text" name="searchTerm" />
      </label>
   </div>
   )
}

export default FilterBar; 