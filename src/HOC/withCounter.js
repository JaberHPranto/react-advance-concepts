import React from 'react'

const UpdatedComponent = (OriginalComponent) => {
    
    const NewComponent = class withCounter extends React.Component {
     constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }
        render() {
            const {count} = this.state
            return <OriginalComponent count={count} handleIncrement={this.handleIncrement} />
        }
    }

    return NewComponent
    
}

export default UpdatedComponent
