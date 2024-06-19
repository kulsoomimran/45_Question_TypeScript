"use strict";
/* TASK # 43 :
Unchanged Magicians: Start with your work from Exercise 40.
 Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array.
 Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
let magicians = [
    "Criss Angel",
    "David Blaine",
    "Derren Brown",
    "Ricky Jay",
];
function show_magicians(magicians) {
    for (let theMagicians of magicians) {
        console.log(theMagicians);
    }
}
function make_great(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push("The Great " + magicians[i]);
    }
    return greatMagicians;
}
const greatMagicians = make_great(magicians);
console.log("\nOriginal Names:");
show_magicians(magicians);
console.log("\nMagicians with 'The Great':");
show_magicians(greatMagicians);
