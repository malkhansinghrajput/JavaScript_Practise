// let user = {
//   name : "Malkhan singh",
//   age : 28,
//   greet : function (){
//    console.log("jay shree Ram")
//   },
//   'is Student': true,
//   adress : {
//     city : "Indore",
//     pincode : 12321,
//     state : "MP"
//   }
// }

// let user = new Object();
// user.name = "Malkhan Singh"
// user.age= 21
// user.adress = {
//   city : "Ujain",
//   pincode : 456221,
//   state : "MP"
// }

// defineProperty in js object working of enumerable,writable,configurable
// Object.defineProperty(user , "country",{
//   value : "India",
//   writable : false
// })

// Object.defineProperty(user, "age",{
//     writable : true,
//     enumerable : true,
//     configurable : false
// })

// user.age = 25
// delete user.age

//  to show the defineProperty output by getOwnPropertyDescriptor(objectName, keyNmae);

// console.log(user.country)
// console.log(Object.getOwnPropertyDescriptor(user, "country"))
// console.log(Object.getOwnPropertyDescriptor(user, "age"))

// console.log(user)

// console.log(user.name)
// console.log(user['age'])
// // console.log(user['100']())
// // console.log(user['is Student'])
// console.log(user.adress.state)
// console.log(user.adress.pincode)
// console.log(user.adress.city)

//  JSON.parse(jsonData) and JSON.stringyfy(object) 

// let a = JSON.stringify(user);
// console.log(a)
// console.log(user)
// let A = JSON.parse(a);
// console.log(A)
 
// freeze and seal method working .

// Object.freeze(user);
// Object.seal(user)
// user.name = "hariom dhakad";
// console.log(user.name)
// delete user.name
// user.name = "Rahul"
// user.school = "loty school ujjain"

// console.log(user)


// All javaScript object method uses are as follow:

// 🔹 1️⃣ Object Create / Structure Control

// ✅ Object.create()

 // 👉 Naya object banata hai kisi existing object ko prototype bana ke

// let student = Object.create(user)
// console.log(student.name)
// student.greet()
// console.log(student.adress.city)

// student.name = "bosdike"
// console.log(student.name)
// console.log(user.name)

// student.adress.city="ujjain" 
// console.log(student.adress.city)
// console.log(user.adress.city)

// console.log(student);


// ✅ Object.assign()

// 👉 Copy ya merge objects (shallow copy)


// let user = {
//   name : "Malkhan singh Dewda",
//   age : 21,
//   greet : function(){
//     console.log("Jay shree Ram")
//   },
//   adress : {
//     city : "indore",
//     state: "Mp",
//     pincode: 456321
    
//   }
// }

// console.log(user)
// object.create() method create a new empty object
// let malkhan = Object.create(user)
// console.log(malkhan === user)
// malkhan.name="banna";
// malkhan.adress.city="ujjain"
// console.log(malkhan.adress.city)
// console.log(malkhan.name)
// console.log(malkhan)

// object .assign() is use for shallow copy it is use with spread operator or {} empty object
// let student = Object.assign(user)  //it can assign direct object not create copy
// console.log(user===student) //true

//shallow copy Es5
// let emp = Object.assign({},user)
// console.log(user===emp); //false
// emp.adress.city="ujjain"
// emp.name="ramlal"
// emp.greet()
// console.log(emp)

// shalow copy with spread operator Es6
// let star = {...user}  
// console.log(user===star)  //false
// star.age=89;
// star.greet();
// star.adress.pincode=423222;
// console.log(star)
// console.log(user)


// shalow copy in Array
// Array ke case m Array first levele copy hota h baki sare object ko nested level samjhta h is liye original object m bhi chang kr deta h
//  let arr = [{name: "hariom sagitra"},user]
 
// let array=[...arr]
// let array = arr.slice()
//  let array = Array.from(arr)   //teen tariko se shalow copy hota array of object
 
// array[1].name="banna"
// console.log(array)
// console.log(arr)
// console.log(user)

// ==============================================================================

let user = {
  name : "Malkhan singh Dewda",
  age : 21,
  // greet : function(){
    // console.log("Jay shree Ram")
  // },
  adress : {
    city : "indore",
    state: "Mp",
    pincode: 456321
    
  }
}

let start = {
  salary: 787877,
  id : 21233,
  clg : "MITM"
}

console.log(user)
// object.create() method create a new empty object
// let malkhan = Object.create(user)
// console.log(malkhan === user)
// malkhan.name="banna";
// malkhan.adress.city="ujjain"
// console.log(malkhan.adress.city)
// console.log(malkhan.name)
// console.log(malkhan)

// object .assign() is use for shallow copy it is use with spread operator or {} empty object
// let student = Object.assign(user)  //it can assign direct object not create copy
// console.log(user===student) //true

//shallow copy Es5
// let emp = Object.assign({},start,user)
// let emp = Object.assign({},user)
// console.log(user===emp); //false
// emp.adress.city="ujjain"
// emp.name="ramlal"
// emp.greet()
// console.log(emp)

// shalow copy with spread operator Es6
// let star = {...user}  
// console.log(user===star)  //false
// star.age=89;
// star.greet();
// star.adress.pincode=423222;
// console.log(star)
// console.log(user)


// shalow copy in Array
// Array ke case m Array first levele copy hota h baki sare object ko nested level samjhta h is liye original object m bhi chang kr deta h
// let arr = [{name: "hariom sagitra"},user]
 
// let array=[...arr]
// let array = arr.slice()
// let array = Array.from(arr)   //teen tariko se shalow copy hota array of object
 
// array[1].name="banna"
// console.log(array)
// console.log(arr)
// console.log(user)

// shallow copy with recursive functions:-

// function shallow(obj) {
   
//   let copy = Array.isArray(obj)? [] : {};
   
//   for(let key in obj){
//     copy[key] = obj[key];
//   }
   
//     return copy;
// }

// let copy = shallow(user);
// copy.name = "Rampal baba";
// copy.adress.city = "ujjain";
// console.log(copy);
// console.log(user);


// =================================================================

// Deep copy of Object...

// 1.structuredClone(objectName);
// True deep cop
// ✔ Supports nested objects, arrays, Date, Map, Set

// let copy = structuredClone(user);

// copy.name="Baba Rampal",
// copy.adress.city= "ujjain",
// copy.adress.state = "UP"
// console.log(copy)
// console.log(user)

// 2. JSON.parse(JSON.stringify(user))
// ✔ Works for simple data
// ❌ Loses functions
// ❌ Loses undefined, Symbol, Date, Map, Set

// let copy = JSON.parse(JSON.stringify(user))

//   copy.name = "bosdike bete";
//   copy.adress.city="Ujjain";
//   console.log(copy)
//   console.log(user)
  
//   3.Manual Recursive Function (Interview Favorite)

// function deepcopy (obj) {
//   if( obj===null || typeof(obj) !== "object"){
//     return obj
//   }
//   let copy = Array.isArray(obj) ? [] : {};
  
//   for(let key in obj){
//     copy[key] = deepcopy(obj[key])
//   }
//   return copy;
// }

// let copy = deepcopy(user);
// console.log(copy);
// copy.name="baba khatuShyam";
// copy.adress.city ="Ujjain";
// console.log(copy);
// console.log(user);


// some Important methods of Object:-

// object.key(obj)
// console.log(Object.keys(user))

// // Object.values(obj)
// console.log(Object.values(user))
// console.log(Object.values(user.adress));

// // Object.entries(obj):- find entries
// console.log(Object.entries(user));

// // Object.hasOwn(obj, vaule): to check only keys exist  or not and not check in nested object ortheir prototype
// console.log(Object.hasOwn(user, 'adress'));

// Object.defineProperty(obj, key{ set a rule}) : to set internal propert like writable : true ; enumerable : false; and configurable : false etc.
Object.defineProperty(user, "name", {
  writable : true,
  enumerable : false,
  configurable: true,
})

console.log(user)

// Object.getOwnPropertydiscriptor(user , key name,) : to check the default property of key or object;

// let m = Object.getOwnPropertyDescriptor(user,"age")
// let n = Object.getOwnPropertyDescriptors(user)
// console.log(m)
// console.log(n)

// Object.frozen(obj):Ye check karti hai ki object freeze hua hai ya nahi.
//Object.freeze(user)
// let m = Object.isFrozen(user);
// console.log(m)

// Object.isSealed(obj); : Ye check karti hai ki object seal hua hai ya nahi
// Object.seal(user)
// let m = Object.isSealed(user);
// console.log(m)

// Object.isExtensible : Ye check karta hai ki object me nayi properties add ho sakti hain ya nahi.
// let n = Object.isExtensible(user)
// console.log(n)

// Object.is(value1, value2) : copare two value butthey work defferently from 
// let x = "abc"
// let b = "cba"
// let m=Object.is(x,b)
// console.log(m)

// Object.toString():- ✔ Object ko string me convert karne ke liye
// ✔ Logging / debugging ke liye
// ✔ Custom readable output dene ke liye
// ✔ Implicit type conversion me

// let user = {
//   name: "Malkhan",
//   age: 22,
//   toString() {
//     return `${this.name} (${this.age})`;
//   }
// };

//  console.log("User: " + user);
// output:
// User: Malkhan (22)

console.log("User: " + user);

let m = user.toString()
console.log(m)


// =============================End==============================================