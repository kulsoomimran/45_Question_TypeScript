"use strict";
/*TASK # 6:
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces.*/
let namewithWhitespaces = "\n\t\n\tKulsoom\t\n\t\n";
console.log(`Name with whitespaces:${namewithWhitespaces}`);
let strippedName = namewithWhitespaces.trim();
console.log(`Name without Whitespaces:${strippedName}`);
