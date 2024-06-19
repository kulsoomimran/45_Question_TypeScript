"use strict";
/* TASK # 31 :
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed */
let userNames = [
    "Masood",
    "Areeba",
    "admin",
    "Zunaisha",
    "Musfirah",
    "Raima",
];
console.log("\nChecking if the array is empty or not..");
if (userNames.length > 0) {
    console.log("Thank you for visiting the website");
}
else {
    console.log("We need to find some users!");
}
console.log("\nClearing the array of userNames..");
userNames = [];
console.log("We need to find some user!");
