import React from 'react'; 

class PigCard extends React.Component {
   state = {
      details: false 
   }

   handleClick = () => {
      this.setState({ details: !this.state.details})
   }

   renderDetails = () => {
      return (
         <div>
            <p> Speciality: { this.props.specialty }</p >
            <p>{this.props.greased ? "Greased" : "Not Greased"}</p>
            <p>Weight: {this.props.weight}</p>
            <p>Highest Medal Achieved: {this.props.medal}</p>
         </div>
      )
   }

   render() {
      return (
         <div>
            <h1>{this.props.name}</h1>
            <button onClick={this.handleClick}>See Details</button>
            <p>{this.state.details && this.renderDetails()}</p>         
         </div>
      )
   }
}

export default PigCard; 