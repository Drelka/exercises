const change = document.querySelector(".change");
const square = document.querySelector(".square");

function changeClasses() {
    if (square.classList.contains("left")) {
        square.classList.remove("left");
        square.classList.add("right");
    } else {
        square.classList.remove("right");
        square.classList.add("left");
    }
}

change.addEventListener("click", changeClasses);