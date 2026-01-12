/**
 * Multilevel InHeritence : 
 * class A => class B => class C => class D... 
 */

class OneBHK {
    constructor(room,kitchen,hall){
        this.room=room
        this.kitchen=kitchen
        this.hall=hall
    }

    getArea() {
        return this.room + this.kitchen + this.hall
    }

    display () {
        console.log("Room is :",this.room)
        console.log("Kitchen is :",this.kitchen)
        console.log("Hall is :",this.hall)
    }
}

// var o1 = new OneBHK(121,221,112)
// o1.display()
// console.log("Area Of OneBHK :",o1.getArea())

export default OneBHK