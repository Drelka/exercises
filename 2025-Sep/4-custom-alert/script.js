const alertButton = document.querySelector("#alertButton");
const customAlert = document.querySelector("#customAlert");
const confirmBtn = document.querySelector("#confirmBtn");


alertButton.addEventListener("click", function() {
    customAlert.style.dispaly = 'flex';
})

confirmBtn.addEventListener("click", function() {
    customAlert.style.display = "none";
})