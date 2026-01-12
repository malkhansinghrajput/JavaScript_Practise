import TwoBHK from "./TwoBHK.mjs";

class ThreeBHK extends TwoBHK {
    constructor(room,hall,kitchen,secondroom,thirdroom){
        super(room,hall,kitchen,secondroom)
        this.thirdroom=thirdroom
    }
    getArea(){
        return super.getArea()+this.thirdroom
    }
    display(){
        super.display()
        console.log("Third Room is:",this.thirdroom)
    }
}
// var o1 = new ThreeBHK(121,100,140,110,105)
// o1.display()
// console.log("Area of ThreeBHK is:",o1.getArea())

export default ThreeBHK