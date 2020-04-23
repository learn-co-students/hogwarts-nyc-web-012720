import React from 'react'
import HogDetail from './HogDetail'

// Note to self: You are allowed to MOVE files/folders in code challenges!
// the images make more sense to MOVE them to the PUBLIC FOLDER!!!

class HogCard extends React.Component {
    state = {
        showDetail: false
    }

    toggleDetails = () => {
        this.setState ({showDetail: !this.state.showDetail})
    }

    render() {
        let img = this.props.name.toLowerCase().split(' ').join('_')
        return (
            <div className="pigTile"  onClick={this.toggleDetails}>
                <h3>{this.props.name}</h3>
                <img src={`/hog-imgs/${img}.jpg`} alt=""/>
                {this.state.showDetail && <HogDetail {...this.props}/>}
            </div>
        )
    }
}

export default HogCard;