const cats = ["Jamie", "Donny", "Crunchy", "Meowee", "Prolly"];

let myFavCats = "My favourite cats are called: ";

let i = 0;

do {
    if (i < cats.length - 1){
        myFavCats += `${cats[i]}, `;
    } else {
        x = myFavCats.slice(0, -2); // removing the last space and a comma before adding "and {last cat}."
        myFavCats = `${x} and ${cats[i]}.`;
    }
    i++;
} while (i < cats.length);

console.log(myFavCats);