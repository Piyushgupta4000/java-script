//  const tinderUser = new Object(); // singletonobject 
const tinderUser ={}; // nonsingleton object

tinderUser.id = "Raju@abc"
tinderUser.name = "raju"
tinderUser.isLoggedIn = false;
//  console.log(tinderUser);

const regularUSer = {
    email: "raju@gmail.com",
    userFullNAme:{
        firstNAme: "Raju",
        lastName: "RajuGupta",
        userQuallificationPercentage:{
            tenth: "77%",
            twelth: "88%",
        }

    }
}

// console.log(regularUSer.userFullNAme.lastName);


const obj1 = {
    1: "A",
    2: "B",
    3: "c",
}

const obj2 = {
    4: "D",
    5: "E",
    6: "F",
}

//  const obj3 = {obj1,obj2}
// console.log(obj1 , obj2);


// const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1,...obj2};
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty(`isLoggedIn`));

const course = {
    courseNAme: "Js in hindi",
    coursePrice: 999,
    cousreInstructor: "hitesh sir"

}

// course.cousreInstructor;

const {cousreInstructor:instructor} =course;

// console.log(cousreInstructor);
// console.log(instructor);

// Api basic

// {
//     "name":"piyush",
//     "couurseNAme": "js in hindi ",
//     "coursePrice": "happy"
// }


[
    {},
    {},
    {},
]