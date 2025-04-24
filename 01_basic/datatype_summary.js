//primitive data type
// 7 types
// String,boolean,number, null,undefined,bigint,symbol


//refrenece type non primitive data call by refrence support 
// array objects function

// // Homework: java script dynamically typed language hai kyuki yaha pe variable declare karte time koi v jarurt nhai hoti data ki types btana,java script code run time mai khud decide kar leta hai ki iska type kya hai code likhte time hme btane ka koi jarurat nahi hai  for example let x = 10;       // x is a number
// x = "Hello";      // now x is a string
// x = true;         // now x is a boolean


// Feature | JavaScript (Dynamic)
// Variable type declared? | ❌ No need
// Type decided at runtime? | ✅ Yes
// Can change type of value? | ✅ Yes
// Error if type mismatched? | ❌ No compile-time error

// symbol data type

// const id = Symbol('123');
// const idAnother = Symbol('123');

// console.log(id === idAnother);

// const heros =["shaktiman", "nagraj" , "doreamone"];
// console.log(heros);
// console.log(typeof(heros));


// let myData={
//     name:"piyush",
//     age:21,
//     education:btech,
// }

// const myFirstFunction =function(){
//     console.log("hello world");
// }
//  myFirstFunction();

//  console.log(typeof(myFirstFunction));

// +++++++++++++++++ memory in java sript ++++++++++++
// stack(primitive) heap (nonprimitive)

// stack: Copied by value — changing one copy doesn't affect the other.

// let myGithubName ="piyush";
// let myInstaAccountName = myGithubName;
// myInstaAccountName = "piyushGupta";
// console.log(myGithubName);
// console.log(myInstaAccountName);

// heap:Copied by reference — multiple variables can point to the same object.

let userOne = {
    userEmail:  "raj@gmail.com",
    userUpiId: "raj@ybl",
}

let userTwo=userOne;

userTwo.userEmail="piyush@gmail.com";

console.log(userOne.userEmail);
console.log(userTwo.userEmail);