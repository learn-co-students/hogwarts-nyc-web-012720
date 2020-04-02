import React from 'react'

class Hog extends React.Component {
    render (){
        return (
            <p>
                {this.props.data.name}
            </p>
        )
    }
}

export default Hog;