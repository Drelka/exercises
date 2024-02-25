let user = {
    name: {
        first: "John",
        second: "Abbot",
    },
    age: 30,
    liveIn: "United Kingdom",
    nameF() { console.log(`My name is ${this.name.first} ${this.name.second}.`) },
    ageF() { console.log(`I am ${this.age} years old.`) },
    liveInF() { console.log(`I live in the ${this.liveIn}.`) },
};

console.log(user.name.first + " (type: " + typeof(user.name.first) + ")");
console.log(user.name.second + " (type: " + typeof(user.name.second) + ")");
console.log(user["name"].first + " " + user.name.second);
console.log(user["age"] + " (type: " + typeof(user.age) + ")");
console.log(user.liveIn);
console.log("");
console.log(user.name.first + " " + user.name.second + " " + user.age)
console.log("");

for(key in user) {
    console.log(key);
}
console.log("");

user.nameF();
user.ageF();
user.liveInF();
console.log("");



let user2 = {};
user2.name = "John";
user2.surname = "Smith";
user2.name = "Pete";
delete user2.name;

function user2Data() {
    for (let key in user2) {
    console.log(key);
    };
};

user2Data();
console.log("");



let schedule = {};

function isEmpty() {
    for (prop in schedule) {
        return false;
    }
return true;
}

console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));
console.log("");


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let sum = 0;

for (key in salaries) {
    sum += salaries[key];
    console.log(sum);
}
console.log("");



let menu = {
    width: 200,
    height: 300,
    title: "My Menu",
}

function multiplyNumeric() {
    for (key in menu) {
        if(typeof menu[key] == "number") {
            menu[key] *= 2;
        }
        console.log(menu[key]);
    }
}
multiplyNumeric();
console.log("");



person = {
    name: ["Bob", "Smith"],
    age: 32,
}

function logProp(propName) {
    console.log(person[propName]);
}

logProp("name");
logProp("age");
console.log("");

person.age = 45;
person["name"]["last"] = "Cratchit";

logProp("name");
logProp("age");
console.log("");


