"use strict";
/*TASK # 14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
let guestList = ["Farah", "Saad", "Laiba", "Dua"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, You're invited for a dinner at my home.`);
}
