/*
Inheritance:Code Reusability.
When a child class inherit properties and features of a parent class and a child class have its own properties and features.
Types of Inheritance:
Single Level inheritance:
class A (Parent,Base,Super) => class B(Child,Derived,Subclass)
*/ 

class Person {
    constructor(name,age,address){
        this.name=name
        this.age=age
        this.address=address
    }
    display(){
        console.log("Name is :",this.name)
        console.log("Age is:",this.age)
        console.log("Address is:",this.address)
    }
}

// var p1 = new Person("Neha Sharma",23,"Indore M.P")
// p1.display()

export default Person