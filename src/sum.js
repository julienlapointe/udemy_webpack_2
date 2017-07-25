// learning #2
// each JS module has its own / separate scope
// therefore, index.js cannot access the sum() function below... unless we "export" it

// function that adds two numbers
const sum = (a, b) => a + b;

// make the sum() function public / available for other JS modules to use
// CommonJS module export syntax
module.exports = sum;