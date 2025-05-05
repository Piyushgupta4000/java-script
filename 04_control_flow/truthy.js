const userEmail = [];
// if (userEmail) {
//     console.log(" user email Got it");
// } else {
//     console.log("useremail Not got it");
// }

// falsy value in java script
// | Value       | Type         |
// | ----------- | ------------ |
// | `false`     | Boolean      |
// | `0`         | Number       |
// | `-0`        | Number       |
// | `0n`        | BigInt       |
// | `""`        | Empty string |
// | `null`      | Null         |
// | `undefined` | Undefined    |
// | `NaN`       | Not a Number |


// truthy value in java script
// Any value not falsy is considered truthy. Some common truthy values:

// true

// Any non-zero number (e.g., 42, -3.14)

// Any non-empty string (e.g., "hello", "0")

// Arrays []

// Objects {}

// Functions function() {}

// "0","false", " ", [] , function(){} // truthy values

// if(userEmail.length === 0){
//     console.log("Array is  empty")
// }

const emptyObject = {}

// if(Object.keys(emptyObject).length===0){
// console.log("object is empty");
// }

// The nullish coalescing operator (??) in JavaScript is used to provide a default value only when the left-hand side is null or undefined.

let value1;
// value1 = 5 ?? 10;
// value1 = null ?? 10;
value1 = undefined ?? 10
value1 = null ?? 10 ?? 20;
// console.log(value1);
// console.log(value1 + 20);


// ternary operator 
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("less then 80"): console.log("more then 80");