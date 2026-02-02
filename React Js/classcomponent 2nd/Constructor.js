/*
Constructor : It is used to initialize an object.
In React,
state:State in React refers to a JavaScript object that holds data specific to a component. It is used to manage dynamic information that can change over time, influencing how a component renders and behaves. 
---------
State is designed to hold data that can change due to user interactions, API responses, or other events.
---------
Inside Constructor super(props) method must be first statement.
*/ 

import React, { Component } from 'react'

export default class Constructor extends Component {
  constructor(props){
    super(props)
    this.state={
        count:this.props.count1
    }
  }  
  render() {
    return (
      <div>
           <h1 className='title'>Constructor Demo</h1>
           <h1>Count is:{this.state.count}</h1>
      </div>
    )
  }
}


