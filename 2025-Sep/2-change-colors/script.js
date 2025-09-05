const change = document.querySelector(".change");
const square = document.querySelector(".square");

function changeClasses(oppositeClass) {
    square.className = oppositeClassClass;
}

change.addEventListener("click", () =>
    square.className === "left"
    ? update("right")
    : update("left"),
);