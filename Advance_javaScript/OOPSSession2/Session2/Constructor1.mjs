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
======
SyntaxError: A class may only have one constructor
====
Polymorphism:Poly(Many) Morphism(Forms)
1.Compile time:
1.Overloading:same name and different arguments.
ex:method overloading and constructor overloading.
---
Note: In Javascript, Overloading is not supported.
---------
2.Runtime Polymorphism:
1.Overriding:same name and same arguments.
ex:method overriding.
=========

*/ 

class Student {
    //default constructor
    // constructor(){
    //     this.college="IIT Indore"
    //     this.name=""
    //     this.rollno=0
    //     this.course=""
    //     this.fees=0.0
    // }
    constructor(name,rollno,course,fees,college){
        this.college=college
        this.name=name
        this.rollno=rollno
        this.course=course
        this.fees=fees
    }

    display(){
        console.log("College is:",this.college)
        console.log("Name is:",this.name)
        console.log("Rollno is:",this.rollno)
        console.log("Course is:",this.course)
        console.log("Fees is:",this.fees)
    }
}

var s1 = new Student("Rahul Sharma",101,"BCA",34567.34,"IIT Indore")
s1.display()

