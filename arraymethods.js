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

//slice() method
let names7 = ["Eren", "Emet", "Palmer", "Rose"];

let slice = names7.slice(1, 3);
console.log(names7);
console.log(slice);

//The 1 picks Emet(in array counting method starting from 0), then 3 picks out Palmer(but in normal counting method starting from 1)

//indexOf()
let names8 = ["Ralia", "Emet", "Palmer", "Rose"];

let index = names8.indexOf("Palmer");
console.log(index);

//if an array is used twice we use the following
let names9 = ["Ralia", "Emet", "Palmer", "Rose", "Ralia"];

let indexs = names9.lastIndexOf("Ralia");
console.log(indexs);

//flat() method

let names10 = [1, 2, 3, [4, 5], 6];
let flat = names10.flat();
console.log(flat);

//Nested array inside a nested array
let nums1 = [1, 2, 3, [4, 5, [6, 7, 8]]];
let flatNums1 = nums1.flat(2);
console.log(flatNums1);

//High Order Array Methods

//forEach() Method
let names11 = ["Vanessa", "Lara", "Sean", "Baggs"];
names11.forEach((n) => {
  console.log(n);
});

//counting the number of arrays
let names12 = ["Vanessa", "Lara", "Sean", "Baggs"];

let count = 0;
names12.forEach((k) => {
  count++;
});

console.log(count);

//Another way of using forEach
/*let names13 = ["Mimi", "Mars", "Val", "Reya"];

 names13.forEach((k) => {
  console.log(k);
});

for (let i = 0; i < names13.length; i++);
console.log(names13[i]);
*/

//map() method

let nums2 = [1, 2, 3, 4, 5];

let double = nums2.map((n) => n * 2);
console.log(double);

//filter()

let books = [
  { title: "Mndarin", author: "Shane" },
  { title: "Pigs Tale", author: "Mistica" },
  { title: "Romeo and Juliet", author: "Alisson Mugambi" },
];

let written = books.filter((b) => b.author === "Shane");
console.log(written);

//reduce()
/*reduce reduces/shrinks the array to a single value by summing it up
from the original currentValue to the last value*/
let nums3 = [1, 3, 5, 7, 9];

let total = nums3.reduce((total, currentVal) => total + currentVal, 12);
console.log(total);

//some()
/*Checks to see if an array meets a certain condition that is tsated 
and decides whether its true or false depending on the set parameters */
let nums4 = [1, 3, 5, 7, 9];

let greater = nums4.some((n) => n > 9);
console.log(greater);

/*One can also add another value that will be counted as the initial value
since if its not declared the initial value will start at first digit(1 in this case)
So 12 is oyr added initial value*/

//Even or Odd
// let k = 10;
/*
let m = 5;

if (k > 2 || m < 3) {
  console.log(`This is an Odd Number`);
} else if (m > 3) {
  console.log(`This is an odd number`);
} else {
  console.log(`Not Odd or Even`);
}

//
function Nums(Even, Odd) {
  return (Even / 2 && 1) || Odd / 1;
}
console.log(Nums(4, 3));

//
function EvenOdd(numbers) {
  if (numbers / 2) {
    console.log(`Odd`);
  } else {
    console.log(`Even`);
  }
}*/
