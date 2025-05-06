const myNum = [1,2,3]
// const myTotal = myNum.reduce(function(acc,currvalue){
//     console.log(`acc currentvalue:${acc} cuur Current value ${currvalue}`)
//     return acc + currvalue
// },0)


const myTotal = myNum.reduce((acc,currvalue)=>acc+currvalue,0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemname: "Jscourse",
        price: 10,
    },
    {
        itemname: "webdevcourse",
        price: 11,
    },
    {
        itemname: "mobiledevcourse",
        price: 10,
    },
    
]

const ToPay = shoppingCart.reduce((acc,item)=>acc + item.price,0)

console.log(ToPay)