// function triples every even number from an array taken, then sums them

// FUNCTION (TAKE the arrays data)
//   CREATE "sum" variable
//   use FOR-LOOP and ITERATE through the array
//     CHECK for even numbers checking if dividing the value by 2 is leaving 0 or 1 as a rest (x % y === ?)
//       TRIPLE even numbers
//         ADD tripled even numbers to the "sum" variable
//   RETURN "sum"


const someArray = [1, 5, 8, 55, 19, 34, 76, 26, 3, 52];

console.log(someArray.length);

function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            const tripleNum = array[i] * 3;
            sum += tripleNum;
        }
    }
    return sum;
}

console.log(sumOfTripledEvens(someArray));


function addOne(num) {
    return num + 1;
}
let afterAddOne = someArray.map(addOne);
console.log(afterAddOne);