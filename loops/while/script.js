// use while loop in this example

// create html p element with an id of "para"

// create an array
// when button in clicked:
    // append the array element
    // keep appending arr. elem. from [0] to [array.lenght-1]
        // after adding the last arr. element make the button inactive

// array [i]
// let i = 0;

// while (i <= (array.length -1)){
    // btn.addEventListener ("click", () => {
        // append array[i];
        // })
    // i++
// }

const cats = ["Pete", "Biggles", "Jasmine"];

const paraCats = document.querySelector("#paraCats");
const btn = document.querySelector("button");
const para = document.querySelector("#para");

paraCats.textContent = cats.join(", ");

let i = 0;

while (i < (cats.length)) {
    let cat = cats[i].toString();
    
    btn.addEventListener("click", () => {
        if (i = cats.length -1){
            para.textContent += `${cat}.`;
        }
        else {
            para.textContent += `${cat}, `;
        }
    })

    i++;
    console.log(i);
};