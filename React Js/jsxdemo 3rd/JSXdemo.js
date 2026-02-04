import React from 'react'
/*
JSX: Javascript XML(eXtensible MarkUp Language)
It allows us to write HTML Code into Javascript and place them into the DOM without using appendChild() and createElement() method.
It converts HTML Tag into React Element.
It is not necessary to use JSX to create React Element but it is more elegant to create Element.
*/
//create React Element without JSX
const ele1 = React.createElement("p", {
  style: {
    backgroundColor: 'darkgoldenrod',
    color: 'white',
    border: "4px solid black",
    borderRadius: 10,
    margin: 20,
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold'
  }
}, "Create React Element Without JSX")

const ele2 = <p style={{
  backgroundColor: 'teal',
  color: 'white',
  border: "4px solid black",
  borderRadius: 10,
  margin: 20,
  padding: 20,
  fontSize: 24,
  fontWeight: 'bold'
}}>Create React Element using JSX</p>

const calculate = (x,y)=>{
    if (x>y) {
        return <h1 className='add'>Addition is:{x+y}</h1>
    } else {
      return <h1 className='mul'>Multiplication is:{x*y}</h1>
    }
}

//React.Fragment 
const JSXdemo = () => {
  return (
    <>
      {ele1}
      {ele2}
      {calculate(5,6)}
    </>
  )
}

export default JSXdemo

