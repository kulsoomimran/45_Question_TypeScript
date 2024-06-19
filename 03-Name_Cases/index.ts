/*TASK # 3 : 
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/

let personName = "haReeM faTIma";
console.log(`Name in LowerCase: '${personName.toLowerCase()}'`);
console.log(`Name in UpperCase: '${personName.toUpperCase()}'`);
let name1 = personName.split(" ");
let name2 = name1.map(
  (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
);
let name3 = name2.join(" ");
console.log(`Name in TitleCase: '${name3}'`);
