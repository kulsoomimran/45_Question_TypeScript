"use strict";
/*TASK # 16:
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
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
