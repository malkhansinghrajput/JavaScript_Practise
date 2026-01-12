import OneBHK from './OneBHK.mjs'
import ThreeBHK from './ThreeBHK.mjs'
import TwoBHK from './TwoBHK.mjs'

function paintinCharges(flat) {
    var area = flat.getArea()
    var charges = area * 12
    return charges

}

var o1 = new OneBHK(121,121,243)
o1.display()
console.log("All Area OneBHK is : ",o1.getArea())
console.log("Painting Charges of OneBHK is : ", paintinCharges(o1))
console.log("=====================")

var o2 = new TwoBHK(101,121,243,133)
o2.display()
console.log("All Area TwoBHK is : ",o2.getArea())
console.log("Painting Charges of TwoBHK is : ", paintinCharges(o2))
console.log("=====================")

var o3 = new ThreeBHK(121,121,243,123,213)
o3.display()
console.log("All Area ThreeBHK is : ",o3.getArea())
console.log("Painting Charges of ThreeBHK is : ", paintinCharges(o3))
console.log("=====================")