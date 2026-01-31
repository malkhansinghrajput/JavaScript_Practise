/*
A component in React is a reusable building block that divides the user interface (UI) into independent, manageable parts. Components allow developers to encapsulate specific functionalities or UI elements, making code more organized and easier to maintain. They receive inputs as properties (props) and return React elements describing what should be displayed on the screen.=
------
React offers two primary types of components: 
Function Components: These are JavaScript functions that accept props as arguments and return JSX (JavaScript XML) to define the UI. They are simpler and often used for presentational or stateless components.
Syntax:
    function Welcome(props) {
      return (<h1>Hello, {props.name}</h1>);
    }
-------
Class Components: These are ES6 classes that extends the React.Component class. They can manage their own state and have lifecycle methods, making them suitable for more complex logic and stateful behavior.
Syntax:
    class Welcome extends React.Component {
      render() {
        return (<h1>Hello, {this.props.name}</h1>);
      }
    }      
*/

function Student(props) {
    return (
        <div>
            <h1>STUDENT DETAILS</h1>
            <h1>Name:{props.name}</h1>
            <h1>Rollno:{props["rollno"]}</h1>
            <h1>Course:{props.course}</h1>
            <h1>Fees in &#8377;:{props.fees}</h1>    
        </div>
    )

}

export default Student