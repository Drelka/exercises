const contacts = [
    "Greg:3452463",
    "Mark:4236754",
    "Alice:3565672345",
    "Margaret:35645723",
    "John:123456",
];

const paragraph = document.querySelector("p");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    paragraph.textContent = "";

    for (const contact of contacts){
        const splitContact = contact.split(":");
        if (splitContact[0].toLowerCase() === searchName){
            paragraph.textContent = 
            `${splitContact[0]}'s phone number is ${splitContact[1]}.`;
            break;
        }
    }
    if(paragraph.textContent === ""){
        paragraph.textContent = "Contact not found.";
    }
});