// make 2 guest list from an array:
    // 1. guests to admit
    // 2. guests to refuse

// create a loop that iterate through the "people" array, that checks for Phil or Lola names (items)
    // if positive, concatenate the item to the end of "ref" para.textContent
    // if negative - concat. to the end of "adm" para.textContent
        // in both cases follow the item by a comma + space


const people = ["Chris", "Anne", "Colin", "Terri", "Phil", "Lola", "Sam", "Kay", "Bruce"];

const adm = document.querySelector(".admitted");
const ref = document.querySelector(".refused");
adm.textContent += "Admit: ";
ref.textContent += "Refuse: ";

function commaToFullStop(){
    adm.textContent = adm.textContent.slice(0, -2) + ".";
    ref.textContent = ref.textContent.slice(0, -2) + ".";
}

let i = 0;

while (i < people.length){
    let personsName = people[i].toString();
        if (personsName === "Phil"
        || personsName === "Lola"){
            ref.textContent += `${personsName}, `
        } else {
            adm.textContent += `${personsName}, `
        }
    i++;
}

commaToFullStop();