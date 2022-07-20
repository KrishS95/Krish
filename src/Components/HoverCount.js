import React from 'react'
import UpdatedComponent from './withCounter'

class HoverCount extends React.Component{
    
    render(){
        return(
            <div>
                {this.props.count}
               <p onMouseOver={this.props.increment}>Mouse Over</p>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCount)