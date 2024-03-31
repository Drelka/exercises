// Input field asking for a number
// Loop from 1 to this number
    // If number divisible by 3 and 5 print "FizzBuzz"
    // If number divisible by 3 print "Fizz"
    // If number divisible by 5 print "Buzz"
        // Otherwise print the current number


// function parseInt() returns an integer (whole number) of the input string


let answer = parseInt(prompt("Enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if (i % 5 === 0){
        console.log("Buzz");
    } else {
    console.log(i);
    }
}