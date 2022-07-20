import React from 'react'
import UpdatedComponent from './withCounter'


class ClickCounter extends React.Component{
    
    render(){
        return(
            <div>
               
                {this.props.count}
                <button onClick={this.props.increment}>Click</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)