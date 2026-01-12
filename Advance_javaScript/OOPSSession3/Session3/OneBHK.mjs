/*
MultiLevel Inheritance:
class A => class B => class C => class D....
*/ 

class OneBHK {
    constructor(room,kitchen,hall){
        this.room=room
        this.kitchen=kitchen
        this.hall=hall
    }
    getArea(){
        return this.room+this.kitchen+this.hall
    }
    display(){
        console.log("Room is:",this.room)
        console.log("Kitchen is:",this.kitchen)
        console.log("Hall is:",this.hall)
    }
}

// var o1 = new OneBHK(121,100,140)
// o1.display()
// console.log("Area of OneBHK is:",o1.getArea())

export default OneBHK