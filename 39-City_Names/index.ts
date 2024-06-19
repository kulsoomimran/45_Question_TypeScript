/* TASK # 39 :
City Names: Write a function called city_country() that takes in the name of a city and its country.
 The function should return a string formatted like this:
 "Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned. */
function city_country(city: string, country: string) {
  return `"${city} , ${country}"`;
}
let func1 = city_country("Antalya", "Türkiye");
console.log(func1);
let func2 = city_country("Sydney", "Australia");
console.log(func2);
let func3 = city_country("Skardu", "Pakistan");
console.log(func3);
