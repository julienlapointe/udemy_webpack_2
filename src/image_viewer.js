// add image assets
import big from "../assets/big.jpg";
// base64 string (data representation of string)
import small from "../assets/small.jpg";
// add CSS file for this <img> element
import "../styles/image_viewer.css";

// create an <img> element
const imageSmall = document.createElement("img");
// assigns a "src" attribute
// image.src = "http://lorempixel.com/400/400";
imageSmall.src = small;
// puts <img> element on the DOM
document.body.appendChild(imageSmall);

// create an <img> element
const imageBig = document.createElement("img");
// assigns a "src" attribute
// image.src = "http://lorempixel.com/400/400";
imageBig.src = big;
// puts <img> element on the DOM
document.body.appendChild(imageBig);

// Note: nothing gets exported because there are no functions to export... this code simply runs and an <img> element appears on the DOM