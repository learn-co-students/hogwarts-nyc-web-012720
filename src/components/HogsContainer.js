import React, { Fragment } from "react";
import HogsCard from "./HogsCard";

class HogsContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            greasedFilter: false,
            name: false,
            weight: false
        }

    }

    renderCard = props => {
        if (this.state.name === true) {
            let sortedProps = props.sort((a, b) => a.name > b.name)
            return sortedProps.map(hog => {
                    return <HogsCard key={hog.id}  
                    name={hog.name}
                    specialty={hog.specialty}
                    greased={hog.greased}
                    weight={hog.weight}
                    highestMedalAchieved={hog['highest medal achieved']}
                    />
        })
    } if (this.state.weight === true) {
        let sortedProps = props.sort((a, b) => a.weight > b.weight)
        return sortedProps.map(hog => {
            return <HogsCard key={hog.id}  
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            highestMedalAchieved={hog['highest medal achieved']}
            />
        })
    } else {
        return props.map(hog => {
            return <HogsCard key={hog.id}  
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            highestMedalAchieved={hog['highest medal achieved']}
            />
        })
    }

    }

    renderGreasedCards = (props) => {
        if (this.state.name === true) {
            let sortedProps = props.sort((a, b) => a.name > b.name)
            return sortedProps.map(hog => {
                if (hog.greased) {
                    return <HogsCard key={hog.id}  
                    name={hog.name}
                    specialty={hog.specialty}
                    greased={hog.greased}
                    weight={hog.weight}
                    highestMedalAchieved={hog['highest medal achieved']}
                    />
                }
        })
    } if (this.state.weight === true) {
        let sortedProps = props.sort((a, b) => a.weight > b.weight)
        return sortedProps.map(hog => {
            if (hog.greased) {
                return <HogsCard key={hog.id}  
                name={hog.name}
                specialty={hog.specialty}
                greased={hog.greased}
                weight={hog.weight}
                highestMedalAchieved={hog['highest medal achieved']}
                />
            }
        })
    } else {
        return props.map(hog => {
            if (hog.greased) {
                return <HogsCard key={hog.id}  
                name={hog.name}
                specialty={hog.specialty}
                greased={hog.greased}
                weight={hog.weight}
                highestMedalAchieved={hog['highest medal achieved']}
                />
            }
        })
    }
    }

    handleClick = () => {
        this.setState({
            greasedFilter: !this.state.greasedFilter
        })
    }

    handleChange = (event) => {
        if(event.target.value === "name"){
            this.setState({
                [event.target.value]: !this.state[event.target.value], 
                weight: false
            })
            }else{
            this.setState({
                [event.target.value]: !this.state[event.target.value], 
                name: false
            })
            }
    }

    // renderByName = (props) => {
    //     let sortedProps = props.sort((a, b) => a.name > b.name)
    //     return sortedProps.map(hog => {
    //         return <HogsCard key={hog.id}  
    //         name={hog.name}
    //         specialty={hog.specialty}
    //         greased={hog.greased}
    //         weight={hog.weight}
    //         highestMedalAchieved={hog['highest medal achieved']}
    //         />
    //     })
    // }

  render() {
      console.log(this.state)
    return (
        <div>
        <div><button onClick={this.handleClick}> {this.state.greasedFilter ? "All Hogs" : "Greased Hogs"} </button>
        <label for="Hogs">Sort By:</label>
        <select id="hogs" onChange={this.handleChange}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
        <h1> </h1>
        </div>
        <div> {this.state.greasedFilter ? 
            <div className="ui grid container">
                {this.renderGreasedCards(this.props.hogs)}
            </div> : 
                <div className="ui grid container">
                    {this.renderCard(this.props.hogs)}
                </div> }
        </div>
        </div>  
    );
  }
}

export default HogsContainer;