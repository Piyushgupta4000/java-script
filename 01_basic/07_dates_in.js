let myDAte = new Date();
// console.log(myDAte);
// console.log(myDAte.toString());
// console.log(myDAte.toDateString());
// console.log(myDAte.toISOString());
// console.log(myDAte.toLocaleDateString());
// console.log(myDAte.toJSON());
// console.log(myDAte.toLocaleString());
// console.log(myDAte.toLocaleTimeString());
// console.log(typeof(myDAte));

let myCreatedDAte = new Date(2024,0,28);
// console.log(myCreatedDAte);
// console.log(myCreatedDAte.toDateString());


// let myDateOfBirth = new Date(2004,1,24);
// let myDateOfBirth = new Date(2004,1,24,5,10,20);
let myDateOfBirth = new Date("2004-12-31");
// let myDateOfBirth = new Date("12-31-2004");



// console.log(myDateOfBirth.toDateString());
// console.log(myDateOfBirth.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myDateOfBirth.getDate());

// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDAte = new Date();
// console.log(newDAte);
// console.log(newDAte.getMonth());
// console.log(newDAte.getMonth()+1);
// console.log(newDAte.getFullYear());
// console.log(newDAte.getDay());

let todayDate = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayName = days[todayDate.getDay()];
// console.log(dayName);


let todayMonth = new Date ();
let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let monthName = month[todayMonth.getMonth()];
console.log(monthName);
