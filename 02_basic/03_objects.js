//singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUSer = {
    name: "Piyush",
    "full name": "Piyush Gupta",
    [mySym]:"myKey1",
    age: 19,
    location: "Ranchi",
    email: "piyushgpta12345@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","sunday"]

}
// console.log(jsUSer.email);
// console.log(jsUSer["email"]);
// console.log(jsUSer["full name"]);
// console.log(jsUSer[mySym]);

jsUSer.email = "piyushgupta987456@gmail.com";
// Object.freeze(jsUSer);
jsUSer.email = "piyushgupta220@gmail.com";
//  console.log(jsUSer);

jsUSer.greeting = function(){
    console.log("Hello Js User");
}

jsUSer.greeting2 = function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(jsUSer.greeting());
console.log(jsUSer.greeting2());