const results = document.querySelector("#results");

function calculate(){
    for (let i = 1; i < 10; i++){
        const newResult = `${i} * ${i} = ${i**2}`;
        results.textContent += `${newResult}\n`;
    }
    results.textContent += "\nFinished!"
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));
