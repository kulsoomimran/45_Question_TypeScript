"use strict";
/* TASK # 24:
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array */
console.log("\n\tTest for Strings:\n");
let name1 = "Hiba";
let name2 = "Ahmed";
// • Tests for equality and inequality with strings
console.log("\nTest for Equality and Inequality");
console.log(name1 === name2);
console.log(name1 !== name2);
// • Tests using the lower case function
console.log("\nTest for Lower Case Function");
console.log(name2.toLowerCase() !== name2);
console.log(name1.toLowerCase() === "Hiba");
console.log("\n\tTest for Numerical Values:\n");
let num1 = 26;
let num2 = 19;
// • Numerical tests involving equality and inequality,
console.log("\nTest for Equality and Inequality");
console.log(num1 !== num2);
console.log(num1 === 29);
console.log(num2 === 19);
// greater than and less than,
console.log("\nTest for Greater Than and Less Than");
console.log(num1 < num2);
console.log(num1 > num2);
console.log(num2 > num1);
// greater than or equal to, and less than or equal to
console.log("\nTest for Greater Than or Equal To, and Less Than or Equal To");
console.log(num1 <= num2);
console.log(num2 <= num1);
console.log(num1 >= num2);
// • Tests using "and" operators
console.log("\nTest using 'and' Operator");
console.log(num1 > num2 && num2 > num1);
console.log(num1 >= 26 && num2 <= 19);
// • Test using "or" operators
console.log("\nTest using 'or' Operator");
console.log(num1 >= 26 || num2 <= 19);
console.log(num1 < num2 || num2 > num1);
console.log("\nTest for Item in Array");
let studentName = [
    "Hania",
    "Moosa",
    "Zobia",
    "Bilal",
    "Talha",
    "Zara",
];
// • Test whether an item is in a array
console.log(studentName.includes("Zara"));
console.log(studentName.includes("Moosa"));
// • Test whether an item is not in a array
console.log("\nTest for Item not in Array");
console.log(studentName.includes("Ahsan"));
console.log(studentName.includes("Sarah"));
