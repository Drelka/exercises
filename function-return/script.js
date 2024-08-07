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

//next addition

input.addEventListener('change', () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
        para.textContent = 'You need to enter a number!';
    } else {
        para.textContent = `${num} squared is ${squared(num)}, `;
        para.textContent += `${num} cubed is ${cubed(num)}, `;
        para.textContent += `${num} factorial is ${factorial(num)}. `;
    }
})