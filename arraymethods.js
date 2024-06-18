//toString()
//Places commas between elements declared in an array

let names = ["Ian", "Allison", "Peter", "Mercy"];

let stringname = names.toString();
console.log(stringname);

//join()
//Does same thing as string, only that element separators can be chosen uniquely(specified)
let jina = ["Vanessa", "Lara", "Sean", "Baggs"];

let stringName = jina.join(" and ");
console.log(stringName);

//concat()
//Joins arrays to the end of another array
let names2 = ["Micah", "Leah"];
let names3 = ["Sarah", "Vero"];
let join = names.concat(names2, names3);

console.log(join);

//splice()
//Removes and adds elements to an array
let names4 = ["Tia", "Tamera", "Rose", "Sina"];

names4.splice(1, 1);
console.log(names4);

//The above array is mutated and to prevent mtation we add another variable and spread it
let names5 = ["Tia", "Tamera", "Rose", "Sina"];
let names5copy = [...names5];

names5copy.splice(2, 1);
console.log(names5);
console.log(names5copy);

//Adding using splice
let names6 = ["Radul", "Emet", "Palmer", "Rose"];

names6.splice(1, 2, "Bill", "Alsina");
console.log(names6);
