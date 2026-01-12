import fs from "fs";

console.log("=======start=========")
var contend = "I am Fine What About You?"
fs.appendFile("Ankit.txt",contend,()=>{
       console.log("Written Content Successfully!!!")
})
console.log("=========Stop=========")