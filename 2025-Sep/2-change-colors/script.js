const change1 = document.querySelector(".change1");
const change2 = document.querySelector(".change2");
const change3 = document.querySelector(".change3");
const change4 = document.querySelector(".change4");
const change = document.querySelector(".change");

const square1 = document.querySelector(".square:nth-child(1)");
const square2 = document.querySelector(".square:nth-child(2)");
const square3 = document.querySelector(".square:nth-child(3)");
const square4 = document.querySelector(".square:nth-child(4)");
const squares = document.querySelectorAll(".square");

function changeClasses1() {
    if (square1.classList.contains("left")) {
        square1.classList.remove("left");
        square1.classList.add("right");
    } else {
        square1.classList.remove("right");
        square1.classList.add("left");
    }
}
change1.addEventListener("click", changeClasses1);

function changeClasses2() {
    if (square2.classList.contains("left")) {
        square2.classList.remove("left");
        square2.classList.add("right");
    } else {
        square2.classList.remove("right");
        square2.classList.add("left");
    }
}
change2.addEventListener("click", changeClasses2);

function changeClasses3() {
    if (square3.classList.contains("left")) {
        square3.classList.remove("left");
        square3.classList.add("right");
    } else {
        square3.classList.remove("right");
        square3.classList.add("left");
    }
}
change3.addEventListener("click", changeClasses3);

function changeClasses4() {
    if (square4.classList.contains("left")) {
        square4.classList.remove("left");
        square4.classList.add("right");
    } else {
        square4.classList.remove("right");
        square4.classList.add("left");
    }
}
change4.addEventListener("click", changeClasses4);

function changeClassesAll() {
    squares.forEach(square => {
        if (square.classList.contains("left")) {
            square.classList.remove("left");
            square.classList.add("right");
        } else {
            square.classList.remove("right");
            square.classList.add("left");
        }
    });
}
change.addEventListener("click", changeClassesAll);