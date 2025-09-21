// 1. btn on click event, run functions
// 2. function 1 makes sure inputs are right, and 
    // if they're NOT - give a warning, some pop up alert window
        // title - both letters and numbers allowed, trim and wrap in quotes after getting data
        // author -  only letters allowed, make sure the first letters of names are capitalized
        // pages - numbers only allowed, use parseToInt to make it an object number
        // yes/no - depends on the input, output one of 2 strings
    // if they ARE, continue
// 3. function 2 use inputs to build an object using object constructor (build object constructor)
    // name of the object after the title, rest are parameters
// 4. use the name and parameters of the object to print this into a text object on the screen part named "library"
    // use separate paragraphs for each
// 5. add toggle button in the corner of the each book "square" to swap between the classic look and the object representation


const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const Yes = document.querySelector("#Yes");
const No = document.querySelector("#No");
const btn = document.querySelector("#btn");
const books = document.querySelector("#books");



const checkInputs = function() {
    let message = ""

    const space = function() {
        if(message != "") {message += " ";}
    }

    if (title.value.trim() === ""){
        message += "Title missing.";
    }
    if (author.value.trim() === "") {
        space();
        message += "Author missing.";
    } else if (/\d/.test(toString(author.value)) === true) {
        space();
        message += "No numbers allowed in the authors name.";
    }
    if (isNaN(parseInt(pages.value))) {
        space();
        message += "Only numbers allowed for pages.";
    }
    if (!Yes.checked && !No.checked) {
        space();
        message += "Please check the \"Have you read this book?\" option."
    }


    if (message !== "") {
        alert(message);
        return false;
    } else {
        return true;
    }

}

const correctInputs = function() {
    
}

btn.addEventListener("click", function(e) {
    e.preventDefault();

    if((checkInputs) === true) {
        return;
    } else {
        alert("Please make sure inputs are right.");
        wrongInputs();
    };
});

