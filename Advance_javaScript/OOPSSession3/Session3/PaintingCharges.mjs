import OneBHK from "./OneBHK.mjs"
import ThreeBHK from "./ThreeBHK.mjs"
import TwoBHK from "./TwoBHK.mjs"

function paintingCharges(flat){
    var area = flat.getArea()
    var charges = area * 12
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
