let globalNumber = 55;

function printNumber(number) {
    let letNumber = 23;

    if (number > 3) {
        const constNumber = number + 4;
        console.log(constNumber);
    }

    console.log(constNumber); // ERROR, variable out of scope
}

printNumber(globalNumber);

console.log(letNumber); // ERROR, variable out of scope


// ---------------------------------------------------------------


function makeAdding(firstNumber) {
    const first = firstNumber;
    
    return function resulting(secondNumber) {
        const second = secondNumber;
        
        return first + second;
    }
}

const add7 = makeAdding(7);
console.log(add7(4)) // = 11


// ---------------------------------------------------------------


// CONSTRUCTOR:

const User = function(name) {
    this.name = name;
    this.discordName = "@" + name;
}

// REFACTORED into a FACTORY FUNCTION:

function createDiscordUser(name) {
    const discordName = "@" + name;
    return {name, discordName};
}


// ---------------------------------------------------------------


// Old way to create an object:
// const someObject = {objName: objName, objAge: objAge, objHeight: objHeight};

// (if the property name is the same as the variable we assign to it, like "objName: objName"), there's a ->
// NEW WAY TO CREATE AN OBJECT:

const newlyCreatedObject = {objName, objAge, objHeight};


// ---------------------------------------------------------------


// DESTRUCTURING and object to extract it's values:

const obj = {x: "abc", y: 5};
const {a, b} = obj;

// EXTRACTS two variables:
// const a = obj.a;
// const b = obj.b;

const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [zerothElement, firstElement, secondElement] = arrayA;

// EXTRACTS three elements of the first three indexes - 0, 1, 2:
// zerothElement = 1;
// firstElement = 2;
// secondElement = 3;



// ---------------------------------------------------------------


// PRIVATE VARIABLES AND FUNCTIONS

function createUser(name) {
    const discordName = "@" + name;
    
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
    
    return {name, discordName, getReputation, giveReputation};
}

const josh = createUser("josh");
josh.giveReputation;
josh.giveReputation;

console.log({
    discordName: josh.discordName;
    reputation: josh.getReputation();
});

// output:
// {discordName: "@josh", reputation: 2}


// ---------------------------------------------------------------


// "extending" createUser into createPlayer factory, adding new metrics - level

function createPlayer(name, level) {
    // deconstructing, getting values
    const {getReputation, giveReputation} = createUser(name);
    
    // returning excracted values + new values
    const increaseLevel = () => level++;
    return {name, getReputation, giveReputation, increaseLevel};
}

// Object.assign method in use:

function createPlayer(name, level) {
    const user = createUser(name);

    const increaseLevel = () => level++;
    return Object.assign({}, user, {increaseLevel});
}


// ---------------------------------------------------------------


