/*
Constructor:
It is used to initialize an object.
It is a member of a class.
It is called automatically when we create an object of a class.
Syntax:
constructor(){
    ...statement
}
=======
Types of Constructor:
1.Default
2.Parameterized    
*/ 

class Student {
    //default constructor
    constructor(){
        this.college="IIT Indore"
        this.name=""
        this.rollno=0
        this.course=""
        this.fees=0.0
    }
    display(){
        console.log("College is:",this.college)
        console.log("Name is:",this.name)
        console.log("Rollno is:",this.rollno)
        console.log("Course is:",this.course)
        console.log("Fees is:",this.fees)
    }
}

var s1 = new Student()
s1.name="Rahul Sharma"
s1.rollno=101
s1.course="BCA"
s1.fees=34567.34
s1.display()

