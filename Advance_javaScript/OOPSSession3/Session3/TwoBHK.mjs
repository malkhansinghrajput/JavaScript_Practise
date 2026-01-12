import OneBHK from "./OneBHK.mjs";

class TwoBHK extends OneBHK {
    constructor(room,hall,kitchen,secondroom){
        super(room,hall,kitchen)
        this.secondroom=secondroom
    }
    getArea(){
        return super.getArea()+this.secondroom
    }
    display(){
        super.display()
        console.log("Second Room is:",this.secondroom)
    }
}
// var o1 = new TwoBHK(121,100,140,110)
// o1.display()
// console.log("Area of TwoBHK is:",o1.getArea())

export default TwoBHK