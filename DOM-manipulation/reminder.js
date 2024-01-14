// const div = document.createElement("div");
// // creates new element in the memory

// parentNode.appendChild(childNode);
// //appends to the parentNode as the last child

// parentNode.insertBefore(newNode, referenceNode)
// // inserts newNode into parentNode, before referenceNode

// parentNode.removeChild(child)
// // removes child from parentNode on the DOM
// // also returns a reference to the child


// const div = document.createElement("div");
// // new div referenced element in the variable "div"

// div.style.color = "blue"    // adds color style rule
// div.style.cssText = "color: black; background: green;";     // adds several style rules
// div.setAttribute("style", "color: black; background: green;");  // same as above


// // when accesing kebab-case CSS rules (dashes-instead-of-spaces) you need to:
// // use camelCase or bracket notation, see examples below:
// div.style.backgroundColor;
// div.style["background-color"];
// // or:
// div.style.cssText = "background-color: white";


// // THIS ONE DOESN'T WORK, DON'T USE:
// // div.style.background-color
// // attempts to substract color from div.style.background only!


// div.setAttribute("id", "theDiv");   // creates/updates id
// div.getAttribute("id");           // returns id
// div.removeAttribute("id");       // removes specified attribute


// div.classList.add("new");   // adds class "new" to to div
// div.classList.remove("new");   // removes class "new"
// div.classList.toggle("active");   // if it has a class named "active" -remove; if hasn't -add

// div.textContent = "Hello people!"; // inserts text into div

// div.innerHTML = "<span> Hello people! </span>" // renders HTML inside div

