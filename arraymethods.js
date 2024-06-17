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
