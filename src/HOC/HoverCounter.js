import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HoverCounter extends Component {
    
    render() {
        const {count,handleIncrement} = this.props
        return (
            <div>
                <h1 onMouseOver={handleIncrement}>Mouse hovered {count} times</h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)