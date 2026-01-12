import TwoBHK from "./TwoBHK.mjs";

class ThreeBHK extends TwoBHK {
    constructor(room,kitchen,hall,secondroom,thirdroom) {
        super(room,kitchen,hall,secondroom)
        this.thirdroom=thirdroom
    }
    getArea(){
        return super.getArea() + this.thirdroom
    }
    display(){
        super.display()
        console.log("ThirdRoom is : ",this.thirdroom)
    }
}

var o1 = new ThreeBHK(121,122,123,124,125)
o1.display()
console.log("AREA of ThreeBHk is :",o1.getArea())

export default ThreeBHK