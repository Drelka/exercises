const cats = ["Pete", "Biggles", "Jasmine", "Joora", "Amarant"];

const paraCats = document.querySelector("#paraCats");
const btn = document.querySelector("button");
const para = document.querySelector("#para");

paraCats.textContent = "List of cats: " + cats.join(", ") + ".";

let i = 0;

btn.addEventListener("click", () => { 
    while (i < cats.length) {

        let cat = cats[i].toString();

        if (i < cats.length -1){
            para.textContent += `${cat}, `;
        }
        else {
            para.textContent += `${cat}.`;
        }
        i++;
        
        break;
    };
});
