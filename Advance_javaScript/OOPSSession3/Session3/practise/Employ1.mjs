/*
Hierarchical Inheritance:Tree Structure
                 class A
            
        class B           class C
        
   class D   class E   class F   class G     
*/

import Person from "../Person.mjs";
class Employe extends Person {
   constructor(name, age, address, id, designation, salary) {
      super(name, age, address) //person class Object
      this.id=id
      this.designation=designation
      this.salary=salary
   }

   display(){
      super.display()
      console.log("Id is : ",this.id)
      console.log("Designation is : ",this.designation)
      console.log("Address is : ", this.address)
   }
}

var s2 = new Employe("Neha Sharma", 21, "Indore M.P",121,"MERN Full Stack Developer",34567.34)
s2.display()