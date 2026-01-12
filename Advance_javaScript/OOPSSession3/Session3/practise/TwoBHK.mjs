import OneBHK from "./OneBHK.mjs";

class TwoBHK extends OneBHK {
    constructor(room,hall,kitchen,secondroom){
          super(room,hall,kitchen)
          this.secondroom=secondroom
    }
    getArea() {
        return super.getArea() + this.secondroom
    }
     display() {
        super.display()
        console.log("SecondRoom is :",this.secondroom)
     }

}

// var o1 = new TwoBHK(121,244,453,789)
// o1.display()
// console.log("ALL AREA of TwoBHK : ",o1.getArea())


export default TwoBHK