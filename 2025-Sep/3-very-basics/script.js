const age = document.querySelector("#age");
const result = document.querySelector("#result");
const confirmButton = document.querySelector("#confirmButton");

function ageResult(input) {
    if (input >= 18) {
        return "Age verification complete.";
    } else {
        alert("Your age is too low.\nYou are now being redirected.");
        window.location.href = "http://www.google.com/";
    }
}

confirmButton.addEventListener("click", ()=> {
    const input = Number(age.value);
    if(Number.isNaN(input)) {
        result.textContent = "Please use only digts to represent you age.";
    } else {
        result.textContent = ageResult(input);
    }
});
