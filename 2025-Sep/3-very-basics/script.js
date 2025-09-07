const age = document.querySelector("#age");
const result = document.querySelector("#result");

const ageVerified = "Age verification complete.";
// const ageLow = alert("Your age is too low. Sorry.");

function ageResult(input) {
    if (input >= 18) {
        return ageVerified;
    } else {
        return alert("Your age is too low. Sorry.");
    }
}

age.addEventListener("change", ()=> {
    const input = parseInt(age.value);
    if(isNaN(input)) {
        result.textContent = "Please use only digts to represent you age.";
    } else {
        result.textContent = ageResult(input);
    }
})