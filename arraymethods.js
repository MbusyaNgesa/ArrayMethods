//toString()
//Places commas between elements declared in an array

let names = ["Ian", "Allison", "Peter", "Mercy"];

let stringname = names.toString();
console.log(stringname);

//Does same thing as string, only that element separators can be chosen uniquely(specified)
let jina = ["Vanessa", "Lara", "Sean", "Baggs"];

let stringName = jina.join(" and ");
console.log(stringName);
