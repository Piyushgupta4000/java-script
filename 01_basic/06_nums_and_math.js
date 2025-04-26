// firstly we learn nums parts in java script lets introduce nums concept in java script 
 const score =400;
//  console.log(score);

 const balance = new Number(400);
//  console.log(balance);
//  console.log(balance.toString().length);
//  console.log(typeof(balance));
//  console.log(balance.toFixed(100)); // 0 to 100 fixed value

const otherNumber = 123.887
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(4));


const hundered = 100000;
// console.log(hundered.toLocaleString());//us number system
// console.log(hundered.toLocaleString(`en-IN`));// indian number system

// console.log(Number.MAX_VALUE);
// number = Number;
// console.log(Number.MIN_VALUE);


//+++++++++++++++++ Maths ++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-456));
// console.log(Math.abs(-0.88));



// console.log(Math.round(4.1));
// console.log(Math.round(4.5));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));


// console.log(Math.max(4,5,3,2,1));
// console.log(Math.min(3,4,5,6));

// console.log(Math.sqrt(625));
// console.log(Math.sqrt(525));

// console.log(Math.random()); // value should be 0 and 1
// console.log((Math.random()*10)+1);
// console.log(Math.random()*10+1);

const min = 10;
const max =20;

console.log((Math.floor(Math.random() * (max-min+1)) )+ min);
