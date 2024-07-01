// EXERCISE_1
console.log("Hello World!");

// EXERCISE_2
let personName: string = "ERIC";
console.log(`Hello ${personName}, would you like to learn some TypeScript today?`);

// EXERCISE_3
let personNameLower: string = "Babar";
console.log("Lowercase:", personNameLower.toLowerCase());
console.log("Uppercase:", personNameLower.toUpperCase());
console.log("Titlecase:", personNameLower.replace(/\b\w/g, c => c.toUpperCase()));

// EXERCISE_4
let quote: string = "A person who never made a mistake never tried anything new";
let author: string = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);

// EXERCISE_5
let quote2: string = "A person who never made a mistake never tried anything new";
let famousPerson: string = "Albert Einstein";
let message: string = `${famousPerson} once said, ${quote2}`;
console.log(message);

// EXERCISE_6
let personName2: string = `\n\t BABAR AZAM\t\n`;
console.log(personName2);
let stripped: string = personName2.trim();
console.log(stripped);

// EXERCISE_7 & EXERCISE_8
console.log(87 + 3);
console.log(54 - 3);
console.log(4 * 2);
console.log(16 / 2);

// EXERCISE_9
let favoriteNumber: number = 4;
console.log(`My favorite number is ${favoriteNumber}`);

// EXERCISE_10
// Program written by: BABAR
// Current date: 19/02/2024
// This is a simple program that prints "Hello World"
console.log('Hello World');
