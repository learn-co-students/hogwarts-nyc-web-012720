import React from "react"
import HogDetail from "./HogDetail"

class Hog extends React.Component {
    
    state = {
        detail: false,
        hidden: false
    }

    clickHandler = () => {
        this.setState({
            detail: !this.state.detail
        })
    }

    alternateClick = () => {
        this.setState({hidden: !this.state.hidden})
    }

    nameFormatter = hogName => {
        return "/hog-imgs/" + hogName.toLowerCase().replace(/ /g, "_") + ".jpg"
    }

    render(){
        return(
            <div className="ui eight wide column">
                <button onClick={this.alternateClick}>{this.state.hidden ? "Hide Hog" : "Show Hog"}</button>
                {!this.state.hidden &&
                <div className="ui link card" onClick={this.clickHandler}>
                    <h1>{this.props.name}</h1>
                    <img src={this.nameFormatter(this.props.name)} alt="hog"></img>
                    {this.state.detail && <HogDetail {...this.props}/>}
                </div>
                }
            </div>
        )
    }
}

export default Hog