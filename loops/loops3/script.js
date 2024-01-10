// loop while, or do..while, starting from 500, ending at 2
// check for prime numbers and run the provide isPrime() function on them, then if:
    // false => continue on to the next loop iteration
    // true => add it to the para's textContent, alond with seperator


    
function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }    
    }
    
    return true;
}

const para = document.createElement('p');
let i = 500;

for (i; i > 1; i--) {
    
    if (isPrime(i) === true) {
        para.textContent += `${i} *`;
    }
    else continue;
}




const section = document.querySelector('section');
section.appendChild(para);