import fs from 'fs'

console.log("=======Start========")
var content = "How are you today?"
fs.appendFileSync("Ankit.txt",content)
console.log("Written Contend Successfully!!")
console.log("========Stop=========")