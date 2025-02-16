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
// used when you have








//   EXERCISE:

