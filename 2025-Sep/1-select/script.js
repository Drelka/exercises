const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", chooseAnimal);

function chooseAnimal() {
    const choice = select.value;

    switch (choice) {
        case "-------":
            para.textContent = "";
            break;
        case "crocodile":
            para.textContent = "Grrrr!";
            break;
        case "elephant":
            para.textContent = "Woooou!";
            break;
        case "gazelle":
            para.textContent = "Meeek! Meek!";
            break;
        case "hare":
            para.textContent = "Yauu!";
            break;
        case "hippo":
            para.textContent = "Mphhh!";
            break;
        case "puma":
            para.textContent = "Wooow!";
            break;
        case "jaguar":
            para.textContent = "Wrrum!";
            break;
    
        default:
            break;
    }
}