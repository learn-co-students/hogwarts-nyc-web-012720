import React from 'react'

class Hog extends React.Component {
    render (){
        return (
            <div className="ui eight wide column">
                <div className="pigTile">
                    <h2>{this.props.data.name}</h2>
                    <h3>{this.props.data.specialty}</h3>
                    <h3>{this.props.data.greased}</h3>
                    <h3>{this.props.data.weight}</h3>
                    <h3>{this.props.data["highest medal achieved"]}</h3>
                </div>
            </div>
        )
    }
}

export default Hog;