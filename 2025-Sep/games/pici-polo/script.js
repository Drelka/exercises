// input the number from 1 to 100 as many times as you want until you guess the number that Greg is thinking of
// Greg will give you hints if your number is higher or lower than his number



const checkButton = document.querySelector("#start");
const givenNumInput = document.querySelector("#given-number");
const msg = document.querySelector("#message");
const revealNum = document.querySelector("#greg > p");

const randomNum = function() {
    return Math.floor(Math.random() * 100) + 1;
}

const borderFade = function(element) {
    clearTimeout(element.borderFadeTimeout);
    element.classList.add("red-border-flash");
    element.borderFadeTimeout = setTimeout(() => {
        element.classList.remove("fading-red-border");
    }, 1);
}

gregsNum = randomNum();

const checkNumber = function(numberX) {
    const num = numberX.value;
    if (num === "") {
        borderFade(givenNumInput);
        msg.textContent = "Please enter a number.";
        return;
    }
    else if (num > 100 || num < 1) {
        borderFade(msg);
        msg.textContent = "Choose a number from 1 to 100.";
        return;
    }
    else if (num > gregsNum) {
        if (num - gregsNum >= 20) {
            msg.textContent = "Far too high.";
        } else if (num - gregsNum < 5) {
            msg.textContent = "Close, but little too high.";
        } else {
            msg.textContent = "Number too high.";
        }
    } else if (num < gregsNum) {
        if (gregsNum - num >= 20) {
            msg.textContent = "Far too low.";
        } else if (gregsNum - num < 5) {
            msg.textContent = "Too low, but very close.";
        } else {
            msg.textContent = "Number too high.";
        }
    } else {
        msg.textContent = "You got it right!";
    }
};


checkButton.addEventListener("click", e => {
    checkNumber(givenNumInput);
});