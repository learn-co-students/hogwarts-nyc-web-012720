import React from 'react';

class HogTile extends React.Component {
   state = {
      showDetails: false 
   }

   toggleShowDetails = () => {
      this.setState({
         showDetails: !this.state.showDetails
      })
   }

   renderDetails = () => {
      return (
         <div>
            <p>{this.props.weight} lbs</p>
            <p><strong>Specialty:</strong> {this.props.specialty}</p>
            <p><strong>Highest Medal Achieved:</strong> {this.props['highest medal achieved']}</p>
            <p>{this.props.greased ? "Greased" : "Not Greased"}</p>
         </div>
      )
   }

   render() {
      const picName = this.props.name.toLowerCase().split(' ').join('_')
      
      return (
         <div className="pigTile" onClick={this.toggleShowDetails}>
            <h1>{this.props.name}</h1>
            <img src={`./hog-imgs/${picName}.jpg`} alt="this little piggy"/>
            <br></br>
            <button onClick={this.renderDetails}>See Details</button>
            <p>{this.state.showDetails && this.renderDetails()}</p>
         </div>
      )
   }
}

export default HogTile; 