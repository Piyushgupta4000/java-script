function sayMyname(){
    console.log("My name is Piyush gupta");
}

// sayMyname();

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}


 const result =addTwoNumbers(350,200);
 
//  console.log("Result",result);

// when we fuction name create then pass value this called parameter 
// when fuction call pass by value this called arguments


function userLoggedIn(username ="Windows11"){
if(username===undefined){
    console.log("Please Enter your Username")
    return;

}
    return `${username} just logged in `;

}

// console.log(userLoggedIn("piyush"));

function calculateCartPrice(...num1){
    return num1;

}
// console.log(calculateCartPrice(200,222,7455855,));

const user = {
username: "Piyush",
price:199
}

function handleObject(anyobject){
console.log(`user name is ${ anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);


const myNewArray = [100,200,600,100];


function returnSecondValueOfArray(getarray){
    return getarray[3];

}
// console.log(returnSecondValueOfArray(myNewArray));
console.log(returnSecondValueOfArray([100,200,600,100]));