

// console.log(a,b,c);
let a = 300;
if (true){
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("INNER_VALUE:",a)
}


// console.log(a);
// console.log(b);
// console.log(c);



function one (){
    const userName = "Piyush"
    function two (){
        const Website = "youtube";
        console.log(userName);
    }
    // console.log(Website);
    // two()
}
// one()


if (true){
    const username = "hitesh";
    if(username==="hitesh"){
        const website = "Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++++interesting+++++++++++++++++++++
console.log(addOne(5));

function addOne (num){
    
    
    return num + 1;
}


console.log(addTwo(5)); // problem create because cannot access addtwo before initialization

const addTwo = function(num){
    return num + 2;

}
