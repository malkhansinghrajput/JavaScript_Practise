import fs from "fs";

console.log("======Start=======")
 fs.readFile("Ankit.txt",(err,data)=> {
   if(err){
      console.log(err)
   } else{
        console.log(data)
console.log("========")
console.log(data.toString())
console.log("Data Read Successfully!!!")
   }  
})

console.log("==========Stop============")