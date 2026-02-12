

let array = [];
console.log(array)
console.log(typeof array)

// CREATE (Array me data add karna)

// 🔹 Method 1: push() (End me add karega)

array.push(20,30,50)   //👉 End me element add karta hai.
console.log(array)

// 🔹 Method 2: unshift() (Start me add karega)

array.unshift(10,15,18)
console.log(array)       //👉 Beginning me add karta hai.

// 🔹 Method 3: splice() (Kahi bhi add kar sakte ho)

array.splice(5,0,33,45)
console.log(array)

// Explanation:-
// 5 → index
// 0 → delete count
// 33,45 → new value


// 🔹 Method 4: Spread Operator (React me most used 🔥)

let newarry = [...array,9,89]   
console.log(array)
console.log(newarry)   //only change in first level copy...


// ======================================*********===========================

// 🟢 2️⃣ READ (Data access karna)

console.log(array[3])

//  🔹 Method 2: Loop se read
//  🔹 forEach() Return Kya Karta Hai?
// forEach() is an array method that executes a provided function once for each array element.

// ⚠ Important Interview Point
// forEach() kuch return nahi karta
// Ye undefined return karta hai.

array.forEach(function(value,index,array){
  console.log(value, index, array)
})

array.forEach((item)=> {
    console.log(item)
})

// find() is an array method that returns the first element that satisfies a given condition.

let result = array.find(num=>num>40)
console.log(result)   //return undefine if conditon is false and condition is true then return next value only.

// 🔹 filter() Method Kya Hota Hai?
// ✅ English Definition:

// filter() is an array method that returns a new array containing all elements that satisfy a given condition.

let newA = array.filter(num => num>30)
console.log(newA)

// ======================================*********===========================

// 3️⃣ UPDATE (Existing value change karna)

// 🔹 Method 1: Direct Index

// array[1] = "malkhan singh dewda"  //cange original array
// console.log(array)

// map() is an array method that creates a new array by applying a function to every element of the original array.

let reuslt = array.map(value =>
     value == 45 ? 200 : value
    );

    console.log(array)
    console.log(reuslt)

// 🔹 Method 3: splice() se update

array.splice(4,1,200)
console.log(array)

// Explanation:
// 1 → index
// 1 → remove count
// 500 → new value

// ======================================*********===========================

// 🟢 4️⃣ DELETE (Data remove karna)
// 🔹 Method 1: pop() (Last remove)

array.pop()
array.pop()
console.log(array)
// last one value remove from last index.

// 🔹 Method 1: shift() (first remove)
// remove from first index.

array.shift()
array.shift()
console.log(array)

// last one value remove from first index.

// 🔹 Method 1: splice(index,delete,value) (any index remove)

array.splice(2,1,)
console.log(array)

// 🔹 Method 4: filter() (Professional way 🔥)


let a = array.filter(num => num !==33)
console.log(a)
console.log(array)


// 👉 Ye new array return karta hai
// 👉 React me mostly ye use hota hai

// ======================================*********===========================


// Important method of Array :-  

//1. Array.some():- some() is an array method that checks whether at least one element in the array satisfies a given condition.
// It returns true or false.

let arr = [12,33,44,22,89,242,21]
let h = arr.some(num => num > 100)
console.log(h)

// ********************************************************

// 2.Array.reduce():-reduce() is an array method that executes a reducer function on each element of the array and reduces it to a single output value.

let reduce = arr.reduce((accumlator, arr) => {
     return accumlator + arr
})
console.log(reduce)
// find highest by reduce function .
let reduce1 = arr.reduce((accum,arr)=> {
  return arr < accum ? arr : accum
})
console.log(reduce1)
// count the fruit in array with name
let fruits = ["apple", "banana", "apple"];

let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});  // initial value {}
console.log(count)

// Q: Why reduce is powerful?

// 👉 Because:
// It can replace map
// It can replace filter
// It can replace forEach
// It can build objects
// It can calculate totals

// ********************************************************

// 3.array.every():-every() is an array method that checks whether all elements in the array satisfy a given condition.
// It returns true or false.

array = [23,42,42,23,20,90]

result = array.every((num)=> num >= 10)
console.log(result);   //true

// ********************************************************
// 4.reverse():- it is used to print array reverse . it changes original array

array = [12,15,16,18,19,20]
let rev = array.reverse()
console.log(rev)
console.log(array)

// ********************************************************
  
// 5. array.sort():- sort() is a JavaScript array method used to sort the elements of an array.

array = [89,25,800,400,2,50]
array.sort((a,b)=> a-b)
// a-b : accending order 
// b-a : decending order
console.log(array)
// it changes original array.

// ********************************************************

// 6.concat():-concat() is an array method used to merge two or more arrays and return a new array.
// it always return new array.

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let arr3 = [10,28,1]
 
result = arr1.concat(arr2,arr3)

console.log(result)
console.log(arr1,arr2,arr3)

// ********************************************************

// 7.include():- includes() is an array method used to check whether an array contains a specific value.it return true and false.

console.log(arr1.includes(4)) //true
console.log(arr2.includes(4))  //false
console.log(arr3.includes(10))  //true


// ********************************************************

// 8. Join() :- join() is an array method used to combine all elements of an array into a single string.
// array.join(separator);
// separator optional hai
// Default separator = , (comma)
// 👉 Output hamesha string hota hai.

let join = arr1.join('-')
let join1 = arr2.join('=')
console.log(join)
console.log(join1)

// it return new string.

// ********************************************************

// 9.Find() :- find() is an array method that returns the first element in the array that satisfies a given condition.
// it return single value that satisfy the condition or if not return undefine

let find = array.find((num,index,array)=> {
  console.log(num,index,array)
  return num > 29
})
console.log(find)
console.log(array)

// ********************************************************

// 10.Flat():-flat() is an array method that flattens nested arrays into a single-level array up to a specified depth

// 🔥 Important Concept
// 👉 flat() original array ko modify nahi karta
// 👉 Ye new array return karta hai

// arr.flat(Infinity);
// 👉 Infinity dene se pura nested array flat ho jata hai.

array = [12,[20,30,40,[0,[]]],[23,49],90]

let flat = array.flat(3)
console.log(array)
console.log(flat)

// ********************************************************

// 11.indexOf() returns the first index at which a given element is found in the array.

// arr.indexOf(searchElement, fromIndex);
// searchElement → kya dhundhna hai
// fromIndex (optional) → kis index se search start karna hai
// Agar value nahi mile → -1 return karta hai

array=[12,45,44,66,77,88,33,22];
let res = array.indexOf(22)
res = array.indexOf(44)
console.log(res); //2
res = array.indexOf(33,2)
console.log(res)  //6

// ********************************************************

// 12.map() :- map() is a built-in JavaScript array method that creates a new array by applying a function to each element of the original array.
// 👉 Important: Original array change nahi hota.
// arr.map((element, index, array) => {
//    return modifiedValue;
// });

// Parameters:
// element → current value
// index → current position
// array → pura original array

// 🔥 4️⃣ Important Rules
// ✔ Hamesha new array return karta hai
// ✔ Same length ka array return karta hai
// ✔ Original array modify nahi karta
// ✔ return likhna zaroori hai

// 🔥 8️⃣ map vs forEach Difference

// Feature	          map()     	 forEach()
// Return           	New Array	   undefined
// Transformation   	✔ Yes	      ❌ Not Ideal
// Chainable	        ✔ Yes	      ❌ No

array=[12,45,44,66,77,88,33,22];

let map = array.map((item)=> item*2)
console.log(array)
console.log(map)

// // ********************************************************

// 13.forEach():- forEach() is a built-in JavaScript array method that executes a provided function once for each element in the array.
// forEach() ek array method hai jo array ke har element par ek function run karta hai, ek-ek karke.

// 👉 Ye loop ki tarah kaam karta hai.

// Parameters:
// element → current value
// index → current position
// array → pura original array

// ⚠ Important Interview Point
// forEach() kuch return nahi karta
// Ye undefined return karta hai.

// 🔥 7️⃣ Real Use Cases
// ✅ 1. Data Print Karna
// Console me data dekhna ho.

// 🔥 8️⃣ Limitations (Very Important)
// ❌ break use nahi kar sakte
// ❌ continue use nahi kar sakte
// ❌ return ka use loop stop karne ke liye nahi hota
// ❌ async/await properly wait nahi karta
// Agar break chahiye → normal for loop use karo.

array=[12,45,44,66,77,88,33,22];

 array.forEach((num, index, array)=> {
  console.log(num, index, array)
  return num *2 
})

// // **************************END******************************