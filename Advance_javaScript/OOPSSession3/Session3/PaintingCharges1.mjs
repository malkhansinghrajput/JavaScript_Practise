import OneBHK from "./OneBHK.mjs"
import ThreeBHK from "./ThreeBHK.mjs"
import TwoBHK from "./TwoBHK.mjs"

function paintingCharges(flat){
    var area = flat.getArea()
    var charges = area * 12

//The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object.

    if (flat instanceof OneBHK) {
        console.log("OneBHK")
        charges=charges-(charges*5/100)
    }
    if (flat instanceof TwoBHK) {
        console.log("TwoBHK")
        charges = area * 12
        charges=charges-(charges*8/100)
    }
    if (flat instanceof ThreeBHK) {
        console.log("ThreeBHK")
        charges = area * 12
        charges=charges-(charges*10/100)
    }
    return charges
}

var o1 = new OneBHK(121,100,140)
o1.display()
console.log("Area of OneBHK is:",o1.getArea())
console.log("Painting Charges of a OneBHK is:",paintingCharges(o1))
console.log("===================")


var o2 = new TwoBHK(121,100,140,110)
o2.display()
console.log("Area of TwoBHK is:",o2.getArea())
console.log("Painting Charges of a TwoBHK is:",paintingCharges(o2))
console.log("===================")

var o3 = new ThreeBHK(121,100,140,110,105)
o3.display()
console.log("Area of ThreeBHK is:",o3.getArea())
console.log("Painting Charges of a ThreeBHK is:",paintingCharges(o3))
console.log("===================")
