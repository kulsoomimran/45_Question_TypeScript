/*TASK # 13 :
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/

let modeOfTransportation: string[] = [
  "car",
  "motor bike",
  "motorcyclce",
  "ship",
];
for (let i = 0; i < modeOfTransportation.length; i++) {
  console.log(`I would like to own a ${modeOfTransportation[i]}.`);
}
