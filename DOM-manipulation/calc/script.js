const btnSum = document.querySelector(".sum");
const inputs = document.querySelectorAll(".inputs input");
const signs = document.querySelectorAll(".signs");
const inputsDiv = document.querySelector(".inputs");

inputs.forEach(input => {
    input.style.cssText = "background: aquamarine; height: 60px; width: 50px; font-size: 20px; text-align: center";
});
signs.forEach(sign => {
    sign.style.fontSize = "20px";
    sign.style.padding ="10px";
    sign.style.fontWeight = "bold"
});
btnSum.style.cssText = "margin-top: 5px; padding: 10px; color: white; background: brown";

const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");

function sum() {
    const result = document.createElement("span");

    let sum = +number1.value + +number2.value;
    
    result.textContent = sum;
    result.style.fontSize = "20px"
    inputsDiv.appendChild(result);
}

btnSum.addEventListener("click", sum);

