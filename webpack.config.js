// tells Webpack what to do with our project
// learning #3
// Webpack runs in NodeJS (even if our project doesn't use NodeJS) so we can include / use NodeJS modules (ex. path)

// learning #4
// add "path" module
// generates the absolute path to where we want to output bundle.js (see below)
const path = require("path");

const config = {
	// required property #1
	// index.js = entry = start of module building process (Webpack convention)
	// relative to location of webpack.config.js
	entry: "./src/index.js",
	// required property #2 with 2 required properties
	output: {
		// absolute path / reference
		// learning #4 (continued)
		// path.resolve() ensures that our path is correct regardless of the OS (Mac, Windows, Linux, etc.)
		// learning #5
		// "__dirname" is a constant in NodeJS that refers to the current working directory
		// save bundle.js inside a folder called "build"
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	} 
};

module.exports = config;