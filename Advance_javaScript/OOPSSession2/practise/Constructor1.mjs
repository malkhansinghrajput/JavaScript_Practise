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
======
Polymorphism: Poly(Many) Morphism(Forms)
1.Compile time:
1.Overloading:same name and different arguments.
ex: method overloading and constructor overloading .
-------
Note: In JavaScript, Overloading is not supported.
-----------
Runtime Polymorphism :
1. Overriding :same name and Same arguments.
ex: method overriding

=========
*/

class Student {
  constructor(name,rollno,course,fees,collage){
      this.collage=collage
      this.name=name
      this.rollno=rollno
      this.course=course
      this.fees=fees
      
  }
  display (){
    console.log("Collage is : ",this.collage)
    console.log("Name is : ", this.name)
    console.log("Rollno is : ",this.rollno)
    console.log("Course is : ",this.course)
    console.log("Fees is : ",this.fees)
  }
}
var s1 = new Student("Malkhan  Singh Dewda",1232,"BCA",48328.43,"MITM Ujjain")
s1.display()