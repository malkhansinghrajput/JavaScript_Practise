import Person from "./Person.mjs";
//ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

class Student extends Person{
    constructor(name,age,address,rollno,course,fees){
        super(name,age,address)//person class object
        this.rollno=rollno
        this.course=course
        this.fees=fees
    }
    //method overriding:same name and same arguments
    display(){
        super.display()
        console.log("Rollno is:",this.rollno)
        console.log("Course is:",this.course)
        console.log("Fees is:",this.fees)
    }
}

var s1 = new Student("Neha Sharma",23,"Ujjain M.P",121,"BCA",34567.34)
s1.display()
