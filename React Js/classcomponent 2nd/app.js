/*
Babel is a JavaScript compiler that allows developers to write modern JavaScript code, including JSX syntax, and have it converted into a backwards-compatible version that can run in older browsers.
JSX, a syntax extension for JavaScript used in React, is converted into standard JavaScript that browsers can understand.
*/
 
import logo from './logo.svg';
import './App.css';
import Student from './components/functioncomponent/Student';
import Student1 from './components/functioncomponent/Student1';
import Product from './components/functioncomponent/Product';
import Employee from './components/classcomponent/Employee';
import Employee1 from './components/classcomponent/Employee1';
import {Employee2,Manager} from './components/classcomponent/Employee2';
import Constructor from './components/classcomponent/Constructor';
 
 
function App() {
  return (
<div className="App">
<Constructor count1={20} />
 
      {/* calling another component */}
      {/* <Manager name="Manoj Sharma" id={232} salary={34567.34} exp={5} /> */}
 
      {/* <Employee name="Rahul Sharma" id={232} salary={34567.34} designation="React JS Developer" /> */}
 
      {/* <Employee1 name="Rahul Sharma" id={232} salary={34567.34} designation="React JS Developer" /> */}
 
      {/* <Employee2 name="Rahul Sharma" id={232} salary={34567.34} designation="React JS Developer" /> */}
 
      {/* <Student name="Neha Sharma" rollno={101} course="BCA" 
      fees={34567.23}
      /> */}
      {/* <Student1 
      name="Neha Sharma" rollno={101} course="BCA" 
      fees={34567.23}
      /><hr></hr>
<Student1 name="Neha Sharma" rollno={101} course="BCA" 
      fees={34567.23}
      /> */}
      {/* <Product imgURL="https://m.media-amazon.com/images/I/6192vQUNCQL._UX569_.jpg" 
      brand="LEE"
      variant="TShirt"
      desc="Men Solid Mandarin Collar Cotton Blend Black T-Shirt"
      sp={1299.99}
      mrp={2299.99}
      size="L,M,XL,XXL,XXXL"
      discount="10"
      /> */}
      {/* <Product imgURL="https://m.media-amazon.com/images/I/6192vQUNCQL._UX569_.jpg" 
      brand="LEE"
      variant="TShirt"
      desc="Men Solid Mandarin Collar Cotton Blend Black T-Shirt"
      sp={1299.99}
      mrp={2299.99}
      size="L,M,XL,XXL,XXXL"
      discount="10"
      /> */}
 
 
    </div>
  );
}
 
export default App;