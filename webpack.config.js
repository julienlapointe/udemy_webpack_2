// tells Webpack what to do with our project
// learning #3
// Webpack runs in NodeJS (even if our project doesn't use NodeJS) so we can include / use NodeJS modules (ex. path)

// learning #4
// add "path" module
// generates the absolute path to where we want to output bundle.js (see below)
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
		filename: "bundle.js",
		// "publicPath" is used by any loader that outputs a file (ex. url-loader for large images)
		publicPath: "build/"
	},
	// learning #6
	// loaders (now called "rules" in Webpack 2)
	module: {
		rules: [
			{
				// learning #7
				// regular expression that Webpack applies to every file in our project
				// Babel gets transpiles files that match the regular expression
				// /\.js$/ = file has a ".js" extension
				test: /\.js$/,
				use: "babel-loader"
			},
			{
				// any files with .css extension will be sent to these loaders (listed in the line below) for pre-processing
				test: /\.css$/,
				// learning #8
				// loaders are applied from <-- RIGHT TO LEFT <--
				// order is important: css-loader must be on right / must load first
				// css-loader opens / reads the CSS files
				// style-loader puts the CSS styles in a <style> tag inside the <head> tag at the top of HTML documents... 
				// use: ["style-loader", "css-loader"],
				// ---
				// ^ this breaks some CSS conventions so we use the ExtractTextPlugin to save the CSS in a separate file 
				// learning #9
				// Note: "use" (new) and "loader" (legacy) properties are the same
				// learning #10
				// plugins and loaders are *not* the same... output from loaders must go into bundle.js, but plugins can withhold output from bundle.js (which we need in order to put our CSS into a separate file)
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader'
				})
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				use: [
					{
						loader: "url-loader",
						// images smaller than 40,000 bytes (40kb) get saved inline in bundle.js, whereas larger images get saved in a separate file
						options: { limit: 40000 }
					},
					"image-webpack-loader"
				]
			}

		]
	},
	plugins: [
		// any CSS from .css files caught by css-loader in the rule above will get compiled and outputted into a single styles.css file
		new ExtractTextPlugin('styles.css')
	]
};

// cannot use ES2015 "export default config;" here... must use CommonJS because Webpack runs on NodeJS?
module.exports = config;