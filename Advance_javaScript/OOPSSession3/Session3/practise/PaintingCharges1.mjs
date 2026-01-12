import OneBHK from "./OneBHK.mjs";
import ThreeBHK from "./ThreeBHK.mjs";
import TwoBHK from "./TwoBHK.mjs";

function PaintingCharges (flat) {
    var area = flat.getArea()
    var charges = area * 12

    // The instanseof operator to see if the prototype property of a comnstructor appears anywhere in the prototype chain of an object.

    if(flat instanceof OneBHK){
        console.log("OneBHK")
        charges = charges - (charges * 5/100)
    }
    if(flat instanceof TwoBHK){
        console.log("TwoBHK")
        charges = flat.getArea() * 12
        charges = charges - (charges * 8/100)
    }
    if(flat instanceof ThreeBHK){
        console.log("ThreeBHK")
        charges = flat.getArea() * 12
        charges = charges - (charges * 10/100)
    }
    return charges
}

var a1 = new OneBHK(121,122,123)
a1.display()
console.log("All Area of OneBHK :",a1.getArea())
console.log("Painting Charges Of OneBHK is :",PaintingCharges(a1))
console.log("================")

var a2 = new TwoBHK(121,122,123,124)
a2.display()
console.log("All Area of TwoBHK :",a2.getArea())
console.log("Painting Charges Of TwoBHK is :",PaintingCharges(a2))
console.log("================")

var a3 = new ThreeBHK(121,122,123,124,125)
a3.display()
console.log("All Area of ThreeBHK :",a3.getArea())
console.log("Painting Charges Of ThreeBHK is :",PaintingCharges(a3))
console.log("================")