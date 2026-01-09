import { add,multiple,sub,divide } from "./m4.mjs";

console.log("Addition is : ", add(23,44))
console.log("Multiplication is : ", multiple(89,34))
console.log("Substraction  is :",sub(89,56))
console.log("DIVIDE is :",divide(78,45))


/**
 * String Literal: Template String provide an easy way to interpolate variable and expression into strings. The method is called string interpolaton.
----------
The dollar sign folled by curly braces ${} is used to evaluate and embed expressions dynamically in template literals
 */

const name = 'John Doe';
const age = 23;
// Using template literals for string interpolation 

console.log(`My Name is : ${name} and my age is : ${age}`)
console.log("My Name is "+name+" and my age is "+age)