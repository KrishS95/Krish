import React from 'react'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC';

export default class ComponentA extends React.Component{
    constructor(){
        super();
        this.state={
            name:"krishna",
            age:''
        }
    }
    handleCallback=(data)=>{
        this.setState({age: data});
    }
    render(){
        return(
            <>
            <div>This is Parent Classs</div>
            <ComponentB childData={this.state.name} parentCallback={this.handleCallback}/>
            Age from Child Component is{this.state.age}
            <ComponentC/>
            </>
        )
    }
}