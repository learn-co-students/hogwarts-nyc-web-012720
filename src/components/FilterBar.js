import React from 'react'; 

class FilterBar extends React.Component {
   render() {
      return (
         <div className="filters">
            <button onClick={this.props.toggleGreased}>{this.props.onlyGreased ? "Show All (Greased & Ungreased)" : "Show Only Greased"}</button>
            <select value={this.props.sort} onChange={event => this.props.changeSortBy(event)}>
               <option value="unsorted">Unsorted</option>
               <option value="alphabetical">Sort Hogs by Name</option>
               <option value="weight">Sort Hogs by Weight</option>
            </select>
         </div>
      )
   }
}

export default FilterBar; 