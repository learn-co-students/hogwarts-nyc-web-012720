import React from 'react';
import HogTile from './HogTile'; 

class HogContainer extends React.Component {
   renderHogTiles = () => {
      return (this.props.hogs.map((hog, index) =>
         <HogTile
            key={index}
            {...hog}
         // we use the spread operator to create a 
         // copy of the hog object with the same key /value 
         // pairs => HogTile will now have access to this data through props
         />)
      )
   }

   render() {
      return (
         <div className="ui eight wide column">
            {/* map through hogs array and render a HogTile for each one */}
            {this.renderHogTiles()}
         </div>
      )
   }
}

export default HogContainer; 