// object syntax

const myObject = {
    property: "value",
    "other property": function(x, y){
        return x + y;
    }
};


// 2 ways to get information from the object

myObject.property;

myObject["other property"];


// can't use variables in dot notation

myObject.variable; // undefined - looking for name: "variable"

myObject[variable]; // equivalent to myObject['property]


// organizing code by grouping

const playerOne = "Tim";
const playertTwo = "Jenn";
const playerOneMarker = "X";
const playerTwoMarker = "O";

// these can be group into objects:

const player1 = {
    name: "John",
    marker: "X",
}

const player2 = {
    name: "Joanna",
    marker: "O",
}

// what can be done on objects (examples):

function printName(player) {
    console.log(player.name);
}

// or:

function gameOver(winningPlayer) {
    console.log("Congratulations!");
    console.log(winningPlayer.name + " is the winner.");
}


// good example of using an object is an item in a shopping basket:

const braeburnApple ={
    type: "fruit",
    variety: "braeburn",
    averageWeightInGrams : 220,
    pricePerKg: 2.2,
}




// *** *** OBJECT CONSTRUCTORS *** ***
// used when you want to "duplicate" the object (like a player, for example)

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

// call the function with the keyword "new"

const player3 = new Player("Greg", "X");
console.log(player3.name); // "Greg"

// you can add functions to the object:

function PlayerX(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function () {
        console.log(this.name)
    };
}

const player4 = new Player("Marry", "F");
const player5 = new Player("Flea", "G");
player4.sayName(); // "Marry"
player5.sayName(); // "Flea"





//   EXERCISE:
// constructor for making "Book" objects:

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.readOrNot = function() {
        if (read = "no" || "not") {
            return ", not read yet";
        } else if (read = "yes"){
            return ", read already";
        } else {
            return "";
        };
    }
    this.description = function() {
        return `${title} by ${author}, ${pages} pages${readOrNot}`
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "no");


