let userName = prompt ("Who's there?", '');

if (userName === 'Admin') {
    let password = prompt ('Password?', '');

    if (password === 'TheMaster') {
        alert('Welcome!');
    }else if (password === '' || password === null) {
        alert('Canceled');
    }else {
        alert('Wrong password');
    }

}else if (userName === '' || userName === null) {
    alert('Canceled');
}else {
    alert("I don't know you");
}





let year = prompt('What year was the last millennium?', '');
if (year == 2000) {
    alert('You are right!');
    alert('That is correct!');
}




if(0){
    alert('This one never executes.');
}

if(1){
    alert('Awlays executes!');
}




/* these become false:

0
empty string ''
null
undefined
NaN
false */




let cond = (x > y);
if(cond){
    alert('smth');
}




let result = condition ? value1: value2;





let accesAllowed = age >= 18 ? 'welcome': 'too young';





let age = prompt('Age?', '18');

let message =
    (age < 3) ? 'Hi baby!':
    (age < 18) ? 'Hello!':
    (age < 100) ? 'Greetings!':
    'What an unusual age!'; // else\default

alert(message);




let age2 = prompt ('Age?', '33');

let message2

if (age2 < 3){
    message2 = 'Hi baby!';
} else if (age2 < 18){
    message2 = 'Hello!';
} else if (age2 < 100){
    message2 = 'Greetings!';
} else {
    message2 = 'What an unusual age!'
}




let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
    alert('Correct!');
} else {
    alert('Wrong!');
}




let official = prompt('What is the "official" name of JavaScript?', '');

if (official = 'ECMAScript') {
    alert('Right!');
} else {
    alert('You don\'t know? "ECMAScript!"')
}




let num = prompt('Type a number: ', 0);

if (num > 0) {
    alert( 1 );
} else if (num < 0){
    alert( -1 );
} else {
    alert( 0 );
}




let reusult;

if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}




let result2 = (a + b < 4) ? 'Below' : 'Over';




let msg = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' :
    '';




let a = 2 + 2;

switch (a) {
    case 3:
        alert('Too small');
        break;
    case 4:
        alert('Exactly');
        break;
    case 5:
        alert('Too big');
        break;
    default:
        alert('I don\'t know such values');
}




let x ='1';
let y = 0;

switch (+a) {
    case b + 1:
        alert('This runs, because +a is 1, exactly equals b+1');
        break;
    case 2:
        alert('this doesn\'t run');
        break;
    default:
        alert('this doesn\'t run either');
}
// Here +a gives 1, a string '1' has been converted to a number.




// Grouping of case:

let g = 3;
switch (g) {
    case 4:
        alert('bla bla');
        break;
    case 3:
    case 5:
        alert('bum bara bum');
        alert('blaa blaaaa');
        break;
    
    default:
        alert('The result is strange. Really.');
}
// We can group cases like above to run the same code for both cases - 3 and 5 in this example.
// The ability to group cases is a side effect of how switch/case works without break.




// Equality check for switch statement is AWLAYS STRICT:

let arg = prompt('Enter a value:');
switch (arg) {
    case '0':
    case '1':
        alert('Zero or one.');
        break;
    case '2':
        alert('Number two.');
        break;
    case 3:
        alert('Never executes due to different types: string VS number');
        alert('NOT STRICTLY EQUAL!');
        break;
    default:
        alert('An unknown value');
}
// For 0 and 1 - first alert runs
// For 2 - the second alert
// But for 3, the result of the prompt is a string '3', which is not strictly equal === to the number 3. Default executes.




if (browser == 'Edge') {
    alert('You\'ve got the edge!');
} else if (
    browser == 'Chrome' ||
    browser == 'Firefox' ||
    browser == 'Safari' ||
    browser == 'Opera') {
    alert('Okay. We support these browsers too.');
} else {
    alert('We hope that this page looks ok!');
}




let q = +prompt('q?', '');

switch (q) {
    case 0:
        alert( 0 );
        break;

    case 1:
        alert( 1 );
        break;

    case 2:
    case 3:
        alert( '2,3' );
        break;
    default:
        alert('prompt < 0 && prompt > 3');
}




function checkAge(age){
    return (age > 18) ? true : confirm('Do you have your parents permission?');
}


function checkAge2(age){
    return (age > 18) || confirm('Did parents allow you?');
}




function min(a, b){
    if (a < b){
        return a;
    } else {
        return b;
    }
    
}


function min2(a, b){
    return (a < b) ? a : b;
}




function max(a, b, c){
    if (a >= b && a >= c){
        return a;
    } else if (b >= a && b >= c){
        return b;
    } else if (c >= a && c >= b){
        return c;
    } else {
        return a;
    }
}


function max(a, b, c){
    return (a >= b && a >= c) ? a :
    (b >= a && b >= c) ? b:
    (c >= a && c >= b) ? c : a;
}




function pow(a, b){
    let result = a ** b;
    return result;
}




function ask(question, yes no){
    if (confirm(question)) yes();
    else no()
}

ask(
    'Do you agree?',
    function() {alert('You agreed.'); },
    function() {alert('You canceled the execution.'); }
);


// CLEAN VERSION WITH USE OF ARROW FUNCTIONS

function ask2(question, yes, no){
    if (confirm(question)) yes();
    else no();
}

ask2(
    'Do you agree?';
    () => alert('You agreed.'),
    () => alert('You canceled the execution.')
);




