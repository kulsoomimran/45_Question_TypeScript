"use strict";
/* TASK # 17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list.
 Print your list to make sure you actually have an empty list at the end of your program. */
let guestList = ["Farah", "Saad", "Laiba", "Dua"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, You're invited for a dinner at my home.`);
}
console.log(`\nUnfortunately, ${guestList[2]} can't make it. So, I'm thinking of inviting someone else.\n`);
console.log("\t'MODIFIED LIST'\n");
guestList[2] = "Huma";
for (let j = 0; j < guestList.length; j++) {
    console.log(`Dear ${guestList[j]}, You're invited for a dinner at my home.`);
}
console.log("\nGood news!!! I have found a bigger dining table. So I'm inviting more guests...\n");
console.log("\t'NEW GUEST LIST'\n");
guestList.unshift("Hasnain");
guestList.splice(3, 0, "Saba");
guestList.push("Enaya");
for (let k = 0; k < guestList.length; k++) {
    console.log(`Dear ${guestList[k]}, You're invited for a dinner at my home.`);
}
console.log("\nSorry, My new dinner table will not arrive on time. I have less space so, I will invite only two people\n");
while (guestList.length > 2) {
    let excludedGuest = guestList.pop();
    console.log(`Sorry ${excludedGuest}, Due to little space, I can't invite you for dinner.`);
}
console.log("\n\t'SHRINKED GUEST LIST'\n");
for (let l = 0; l < guestList.length; l++) {
    console.log(`Dear ${guestList[l]}, You're still invited for a dinner at my home.`);
}
guestList.pop();
guestList.pop();
console.log("\n\t'FINAL GUEST LIST'\n");
console.log("My final guest list is:", guestList);
