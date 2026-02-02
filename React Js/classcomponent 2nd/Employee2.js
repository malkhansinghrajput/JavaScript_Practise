/*
Class Components: These are ES6 classes that extends the React.Component class. They can manage their own state and have lifecycle methods, making them suitable for more complex logic and stateful behavior.
Syntax:
    class Welcome extends React.Component {
      render() {
        return (<h1>Hello, {this.props.name}</h1>);
      }
    }      
*/ 
import React, { Component } from "react";
export class Employee2 extends React.Component {
    render(){
        return(
        <div>
            <h1 className='title'>EMPLOYEE DETAILS</h1>
            <div style={{backgroundColor:'teal',margin:20,padding:10,borderRadius:10,color:'white'}}>
            <h2>Name:{this.props.name}</h2>
            <h2>Id:{this.props.id}</h2>
            <h2>Salary:{this.props.salary}</h2>
            <h2>Designation:{this.props.designation}</h2>
            </div>
        </div>
        )
    }
}
export class Manager extends Component {
     render(){
        return(
        <div>
            <h1 className='title'>MANAGER DETAILS</h1>
            <div style={{backgroundColor:'teal',margin:20,padding:10,borderRadius:10,color:'white'}}>
            <h2>Name:{this.props.name}</h2>
            <h2>Id:{this.props.id}</h2>
            <h2>Salary:{this.props.salary}</h2>
            <h2>Exp:{this.props.exp}</h2>
            </div>
        </div>
        )
     }
}


//export  {Employee2,Manager}