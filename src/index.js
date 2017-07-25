// learning #1
// depends on sum.js to execute
// sum.js must be loaded before index.js can be executed
// index.js must import / require sum.js
// every JS file / module needs to be imported *at least once somewhere* in order for it to appear in the bundle.js
// './sum' represents a relative file path / reference (relative to the location of index.js)
// ES2015 module import syntax
import sum from "./sum.js";
// no executable code / functions in image_viewer.js, therefore no need to assign an alias (ex. "sum" in the above line)
// image_viewer.js simply puts an <img> element on the DOM
import "./image_viewer.js";

// add numbers together using the imported sum() function and print the sum "total" to the console
const total = sum(10, 5);
console.log(total);