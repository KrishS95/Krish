import React from 'react'

export default class ComponentB extends React.Component{

    sendData=()=>{
    this.props.parentCallback('26');
    }
    
    render(){
        return(
            <>
            {this.sendData}
            <div>This is Child Class</div>
            {this.props.childData}
            </>
        )
    }
}