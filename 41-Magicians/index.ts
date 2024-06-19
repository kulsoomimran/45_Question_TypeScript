/* TASK # 41 :
Magicians: Make a array of magician’s names.
 Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

let magicians: string[] = [
  "Criss Angel",
  "David Blaine",
  "Derren Brown",
  "Ricky Jay",
];
function show_magicians(magicians: string[]) {
  for (let theMagicians of magicians) {
    console.log(theMagicians);
  }
}
show_magicians(magicians);
