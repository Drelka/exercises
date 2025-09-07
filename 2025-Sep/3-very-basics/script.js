
const age = document.querySelector("#age");
const result = document.querySelector("#result");

const ageVerified = "Age verification complete."
const ageLow = "Your age is too low. Sorry."

function ageResult(age) {
    if (age >= 18) {
        return ageVerified;
    } else {
        return ageLow;
    }
}