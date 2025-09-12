// const playerOne = "Daniel";
// const playerTwo = "Natasha";
// const playerThree = "Agata";
// const playerFour = "Sonya";
// const playerFive = "Nathan";

// const playerOneMarker = "X";
// const playerTwoMarker = "D";
// const playerThreeMarker = "J";
// const playerFourMarker = "Y";
// const playerFiveMarker = "Z";

// can write like this for each player:

const playerOne = {
    name: "Daniel",
    marker: "X",

}
const playerTwo = {
    name: "Natasha",
    marker: "D",
}

// etc etc...
// so we can use the function to call the name, or the marker, like this

function printName(player) {
    console.log(player.name);
}

console.log(playerOne);
console.log(playerTwo);

// then we can use this in different situations, letting the condition pick the name, like - winning the game

function gameOver (winner) {
    console.log(`..and the winner is ${winner}!`);
}

