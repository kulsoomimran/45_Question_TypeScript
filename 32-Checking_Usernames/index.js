"use strict";
/* TASK # 32 :
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users.
 Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used.
 If it has, print a message that the person will need to enter a new username.
  If a username has not been used, print a message saying that the username is available.
  • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */
let current_users = [
    "Maisam234",
    "waseem9076",
    "Ayesha5367",
    "zaviyar000",
    "Atif7431",
    "anjum1901",
];
let new_users = [
    "ahram3345",
    "WASEEM9076",
    "fahad_3459",
    "anjum1901",
    "rimsha9520",
];
for (let newUser of new_users) {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()))
        console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
    else {
        console.log(`The username '${newUser}' is available.`);
    }
}
