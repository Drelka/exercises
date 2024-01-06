// launch countdown exercise

// use a loop starting from i = 10, stopping when == 0 and decrementing by 1 each iteration
// for every iteration create and append paragraph (with the .textContent) to the div.output
    // for i = 10 to 1 text should be "Countdown (i)"
    // for i = 0 it should be "Blast off!"



let output = document.querySelector(".output");
output.innerHTML = "";

let i = 15;

for (i ; i >= 0 ; i--){
    const para = document.createElement("p");

    if (i === 15){
        para.textContent = `Countdown ${i}!`;
    } else if (i === 0) {
        para.textContent = "Blast off!";
    } else {
        para.textContent = `${i}`;
    }

    output.appendChild(para);
}