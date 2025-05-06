const coding = ["js","ruby","java","python","cpp"]
coding.forEach(function (item){
//console.log(item)
})

coding.forEach((item)=>{
//console.log(item)
})

// function printMe(item){
// console.log(item)
// }

// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
//console.log(item,index,arr)
})

const myCoding = [
    {
        langaugeName:"python",
        languageFileName:"py"
    },
    {
        langaugeName:"java",
        languageFileName:"java"
    },
    {
        langaugeName:"cpp",
        languageFileName:"c++"
    },
]

myCoding.forEach((item)=>{
console.log(item.languageFileName)
})