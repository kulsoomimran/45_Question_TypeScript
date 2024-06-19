"use strict";
/* TASK # 42 :
Great Magicians: Start with a copy of your program from Exercise 39.
 Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.*/
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
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
make_great(magicians);
show_magicians(magicians);
