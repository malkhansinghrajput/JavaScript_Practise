/*
Hierarchical Inheritance:Tree Structure
                 class A
            
        class B           class C
        
   class D   class E   class F   class G     
*/

import Person from "./Person.mjs";
class Employee extends Person{
    constructor(name,age,address,id,designation,salary){
        super(name,age,address)//person class object
        this.id=id
        this.designation=designation
        this.salary=salary
    }
    //method overriding:same name and same arguments
    display(){
        super.display()
        console.log("id is:",this.id)
        console.log("designation is:",this.designation)
        console.log("salary is:",this.salary)
    }
}

var s1 = new Employee("Neha Sharma",23,"Ujjain M.P",121,"React JS Developer",34567.34)
s1.display()
