import React from 'react'
import HogDetail from './HogDetail'

class HogCard extends React.Component {

    state = {
        details: false
    }

    handleClick = () => {
        this.setState({
            details: !this.state.details
        })
    }

    getImage = () => {
        let img = this.props.hog.name.toLowerCase().split(" ").join("_") + ".jpg"
        return img = require(`../hog-imgs/${img}`)
    }




    render () {
        return (
            <div className="pigTile">
                <h1>{this.props.hog.name}</h1>
                <img src={this.getImage()} alt="image"/>
                <div><button onClick={this.handleClick}>{this.state.details ? "Hide Details" : "Show Details"}</button></div>
                <p>{this.state.details && <HogDetail hog={this.props.hog}/>}</p>
            </div>
        )
        
    }


}

export default HogCard