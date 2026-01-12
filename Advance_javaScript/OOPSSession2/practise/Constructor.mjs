/**
 * Constructor :
   It is used to initialize an object.
   It is called automatically When we create an object of a class.
   Syntax: 
   constructor(){
       ...statement
}
    ============
    Types of Constructor :
    1.Default
    2.Parameterized
 */

    class Student {
       // default constructor 
       constructor() {
              this.collage="ITI Indore"
              this.name=""
              this.rollno=0
              this.course=""
              this.fees=0.0
       }
       display(){
              console.log("College is:",this.collage)
              console.log("Name is:",this.name)
              console.log("Rollno is :",this.rollno)
              console.log("Cource is :",this.course)
              console.log("Fees is : ", this.fees)
       }
    }

    var s1 = new Student()
    s1.name="Rahul sharma"
    s1.rollno=101
    s1.course="BCA"
    s1.fees=23932.809
    s1.display()