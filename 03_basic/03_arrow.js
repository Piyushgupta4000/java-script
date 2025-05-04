const user = {
    username : "Piyush",
    price : 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this)

    }
}

// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// const chai = function(){
//     let userName = "piyush";
//     console.log(this.userName);
// }

// chai()

// const chai= () => {
// let userName = "Piyushh"
// console.log(this.userName);
// console.log(this);
// }
// chai()


// const addTwo = (num1,num2) => {
//     return num1 + num2 ;

// }


// const addTwo = (num1,num2) => num1 +num2;
// const addTwo = (num1,num2) =>(num1+num2);

const addTwo = (num1,num2) =>({username:"piyush"});

// console.log(addTwo(5,5.5));

// const myArray = [3,4,5]

// myArray.forEach();
