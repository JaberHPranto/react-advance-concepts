import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {

    
    render() {
        const {count,handleIncrement} = this.props
        return (
            <div>
                <h1>Count : {count}</h1>
                <button type='button' onClick={handleIncrement}>Click me</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)