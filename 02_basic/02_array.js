const myFirstArray =["A","B","c"];
const mySecondArray = ["D","E","F"];
const myThirdArray = [1,2,3];

// mySecondArray.push(myFirstArray);
// console.log(myFirstArray);
// console.log(mySecondArray);
// console.log(mySecondArray[3][1]);
// console.log(typeof(myFirstArray));
// console.log(typeof(mySecondArray));
// console.log(myFirstArray.indexOf(1));
// console.log(mySecondArray.indexOf(0));
// console.log(myFirstArray.findIndex(item => item === "B")); // 1
// console.log(mySecondArray);
// console.log(mySecondArray.findIndex(item => item === "D")); // 0
// const nestedArray = mySecondArray[3];
// console.log(nestedArray.indexOf("A")); // Output: 0

// // console.log(myThirdArray.indexOf(1));

// const allArray = mySecondArray.concat(myFirstArray);
// console.log(allArray); // merge array

// const allNewArray = [...myFirstArray,...mySecondArray,...myThirdArray];
// console.log(allNewArray);



console.log(Array.isArray("piyush"));
console.log(Array.from("piyush"));
console.log(Array.from({name:"piyush"})); // interesting case 

let score1 =100;
let score2 =200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));