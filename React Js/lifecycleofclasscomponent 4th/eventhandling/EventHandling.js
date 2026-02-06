import React, { Component } from 'react'

export default class EventHandling extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       show:true,
       name:"",
       age:0,
       address:""
    }
  }
  componentDidMount(){
    document.getElementById('main').style.display='none'
  }

  handleUpdate(){
    this.setState((state)=>({
        show:!state.show
    }))
  }

//   personDetails(name,age,address){
//     console.log(name,age,address)
//     document.getElementById('main').style.display='inline-block'
//     this.setState({
//         name,
//         age,
//         address
//     })
//   }
  personDetails=(name,age,address)=>{
    console.log(name,age,address)
    document.getElementById('main').style.display='inline-block'
    this.setState({
        name,
        age,
        address
    })
  }
    
  render() {
    return (
      <div>
        <h1 className='title'>EventHandling</h1>
        <button onClick={this.handleUpdate.bind(this)}>
            {this.state.show ? <h2>HIDE</h2>:<h2>SHOW</h2> }
        </button>
        {this.state.show ? <h1 style={{borderRadius:10,border:'2px solid black',margin:20,padding:20}}>Hello World</h1>:null}<hr></hr>
        {/* <button onClick={this.personDetails.bind(this,"Rahul Sharma",23,"Indore M.P")}>
           details
        </button><br></br> */}
         <button onClick={()=> this.personDetails("Neha Sharma",23,"Indore M.P")}>
           details
        </button><br></br>
        <div id='main'>
            <h1>Name:{this.state.name}</h1>
            <h1>Age:{this.state.age}</h1>
            <h1>Address:{this.state.address}</h1>
        </div>
      </div>
    )
  }
}
