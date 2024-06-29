const item = document.querySelectorAll('.item');

let colorPicked = '';

function random255(){
    return Math.floor(Math.random() * 255 + 1);
}

function randomColor(){
    return colorPicked = `rgba(${random255()}, ${random255()}, ${random255()}, 1)`;
}

// items.forEach((item) =>{
//     item.style.backgroundColor = colorPicked;
// });

forEach(item in items => () {
    item.style.backgroundColor = colorPicked;
})