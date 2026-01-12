/**
 * fs module : It is a file System Module which is inbuilt module in Node JS used for file related implementation .
 --------
 1.Read
 2.Write
 3.Append
 */

 import fs from "fs";
 console.log("========Start=========")
 var content = "Good Evening!!!"
 fs.writeFileSync("Ankit.txt",content)
 console.log("Written Content Successfully!!")
 console.log("======Stop==========")