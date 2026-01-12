import fs from 'fs'

console.log("===========Start========")
var data = fs.readFileSync("Ankit.txt")
console.log(data)
console.log("==========")
console.log(data.toString())
console.log("Data Read Sucessfullly")
console.log("============Stop========")