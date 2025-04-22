const accountId=612345
let accountEmail="piyushgupta@google.com"
var accountPassword="12345"
accountCity="Daltonganj"
let accountState;
// accountId = 2//not allowed in java script when before declare const
accountEmail="raj@612345"
accountPassword="54321"
accountCity="Ranchi"

/*
prefer not to use var because issue of block scope and functional scope
*/
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState])
