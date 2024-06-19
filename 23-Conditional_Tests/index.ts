/* TASK # 23 :
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. 
Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let studentName = "Hoorab Zeeshan";

console.log("Is studentName === 'Hoorab Zeeshan'? I predict True.");
console.log(studentName === "Hoorab Zeeshan");

console.log("Is studentName !== 'Hoorab Zeeshan'? I predict False.");
console.log(studentName !== "Hoorab Zeeshan");

console.log("Is studentName !== 'Enaya Zeeshan'? I predict True.");
console.log(studentName !== "Enaya Zeeshan");

console.log("Is studentName === 'hooRaB zEeshaN'? I predict False.");
console.log(studentName === "hooRaB zEeshaN");

console.log("Is studentName in lower case? I predict False.");
console.log(studentName.toLowerCase() === studentName);

console.log("Is studentName not in lower case? I predict True.");
console.log(studentName.toLowerCase() !== studentName);

console.log("Is studentName in upper case? I predict False.");
console.log(studentName.toUpperCase() === studentName);

console.log("Is studentName not in upper case? I predict True.");
console.log(studentName.toUpperCase() !== studentName);

console.log("Is characters in the student name is 15? I predict False.");
console.log(studentName.length === 15);

console.log(
  "Is characters in the student name is greater than 10? I predict True."
);
console.log(studentName.length > 10);
