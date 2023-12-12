const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

//added js below

function squared (num) {
    return num ** 2;
}

function cubed (num) {
    return num ** 3;
}

function factorial (num) {
    if (num < 0) return undefined;
    if (num === 0) return 1;
    let x = num - 1;
    while (x > 1) {
        num *= x;
        x--;
    }
    return num;
}