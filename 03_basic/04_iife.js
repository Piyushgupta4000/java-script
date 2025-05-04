// "IIFE" (Immediately Invoked Function Expression)

(function chai ()
{
    console.log("DB CONNECTED"); //named iife
})();


((name) => {
    console.log(`DB CONNECTED TWO,${name}`);
})("piyush")                       //un namediife

