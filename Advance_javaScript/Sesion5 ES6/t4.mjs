import {add,substract,divide,multiple} from './m4.mjs'

console.log("Addition is:",add(23,34))
console.log("Substraction is:",substract(23,34))
console.log("Multiplication is:",multiple(23,34))
console.log("Divide is:",divide(23,34))

/*
String Literal:Template String provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.
----
The dollar sign followed by curly braces ${} is used to evaluate and embed expressions dynamically in template literals. 
*/
const name = 'John Doe'; 
const age = 20; 
// Using template literals for string interpolation 

console.log(`My Name is:${name} and age is:${age}`)
console.log("My Name is:"+name+" and age is:"+age)
