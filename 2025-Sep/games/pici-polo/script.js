// input the number from 1 to 100 as many times as you want until you guess the number that Greg is thinking of
// Greg will give you hints if your number is higher or lower than his number



const checkButton = document.querySelector("#start");
const givenNum = document.querySelector("#given-number");
const msg = document.querySelector("#message");
const revealNum = document.querySelector("#greg > p");

const randomNum = function() {
    return Math.floor(Math.random() * 100);
}

gregsNum = randomNum();


const checkNumber = function(numberX) {
    const num = numberX.value;
    if (num <= 100 && num > 0) {
        if (num > gregsNum) {
            if (num - gregsNum >= 20) {
                return "Far too high.";
            } else if (num - gregsNum < 5) {
                return "Close, but little too high.";
            } else {
                return "Number too high.";
            }
        } else if (num < gregsNum) {
            if (gregsNum - num >= 20) {
                return "Far too low.";
            } else if (gregsNum - num < 5) {
                return "Too low, but very close.";
            } else {
                return "Number too high.";
            }
        } else {
            return "You got it right!";
        }
    } else {
        return "Choose number from 1 to 100."
    }
};


checkButton.addEventListener("click", e => {
    msg.textContent = checkNumber(givenNum);
});