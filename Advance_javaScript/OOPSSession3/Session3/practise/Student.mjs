import Person from "../Person.mjs";

// ReferencreError : Must call super constructor in derived class before accessing 'this' or returning from derived constructor

class Student extends Person {
      constructor(name,age,address,rollno,course,fees) {
        super(name,age,address) //persion class object
        this.rollno=rollno
        this.course=course
        this.fees=fees
      }

      show() {
        console.log("Rollno is : ",this.rollno)
        console.log("Course is : ",this.course)
        console.log("Fess is : ",this.fees)
      }
}

var s2 = new Student("Malkhan Singh", 24, "Ujjain M.P", 121, "M.C.A",540000.00)
 s2.display()
s2.show()
