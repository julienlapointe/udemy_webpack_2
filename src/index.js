// learning #1
// depends on sum.js ot execute
// sum.js must be loaded before index.js can be executed
// index.js must import / require sum.js
// './sum' represents a relative file path / reference (relative to the location of index.js)
const sum = require("./sum");

// add numbers together using the imported sum() function and print the sum "total" to the console
const total = sum(10, 5);
console.log(total);