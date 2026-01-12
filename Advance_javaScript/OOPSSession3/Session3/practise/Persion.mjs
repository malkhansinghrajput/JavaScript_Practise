/**
 * Inheritance : Code Reusabloity.
   When a child class inherit properties and features of a parent class and a child classs have its own properties and features.
   Type Of Inheritance :
   Single Level inheritance :
   Class A (Parent ,Base, Super) => class B (Child,Derived,Subclass)
 */

   class Person {
    constructor(name,age,address) {
        this.name=name
        this.age=age
        this.address=address
    }

    display() {
        console.log("Name is : ",this.name)
        console.log("Age is : ",this.age)
        console.log("Address is : ",this.address)
    }
   }

//    var p1 = new Persion("Rahul Sharma",34,"indore M.P")
//    p1.display()

export default Person