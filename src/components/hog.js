import React from 'react'

class Hog extends React.Component {
    
    state = {
        fullDisplay: false
    }

    clickHandler = () => {
        this.setState({fullDisplay: !this.state.fullDisplay})
    }

    formatName = name => {
        return name.toLowerCase().replace(/ /g, "_")
    }

    render (){
        return (
            <div onClick={this.clickHandler} className="ui eight wide column">
                <div className="pigTile">
                    <h2>{this.props.data.name}</h2>
                    <img src={`/hog-imgs/${this.formatName(this.props.data.name)}.jpg`} />
                    {this.state.fullDisplay ? 
                    <div name="description">
                        <h3>{this.props.data.specialty}</h3>
                        <h3>{this.props.data.greased}</h3>
                        <h3>{this.props.data.weight}</h3>
                        <h3>{this.props.data["highest medal achieved"]}</h3>
                    </div>
                    : null}

                </div>
            </div>
        )
    }
}

export default Hog;