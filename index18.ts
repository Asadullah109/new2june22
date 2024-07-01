// EXERCISE_21
interface Item {
    name: string;
    price: number;
}

// Create two objects using the interface
const book1: Item = {
    name: "ESSENTIAL TYPESCRIPT",
    price: 12.99,
};

const apple1: Item = {
    name: "Apple",
    price: 0.99,
};

// Access and print the object properties
console.log(`Book name: ${book1.name}, price: $${book1.price}`);
console.log(`Apple name: ${apple1.name}, price: $${apple1.price}`);


// EXERCISE_22
// Define an interface for the object structure
interface Item {
    name: string;
    price: number;
}

// Create two objects using the interface
const book: Item = {
    name: "ESSENTIAL TYPESCRIPT",
    price: 12.99,
};

const apple: Item = {
    name: "Apple",
    price: 0.99,
};

// Access and print the object properties
console.log(`Book name: ${book.name}, price: $${book.price}`);
console.log(`Apple name: ${apple.name}, price: $${apple.price}`);


// EXERCISE_23
let cars: string = 'subaru';

// Test 1: Equality comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru'); // True

// Test 2: Strict equality comparison (True)
console.log("Is car === 'subaru'? I predict True.");
console.log(cars === 'subaru'); // True


// EXERCISE_24
let car: string = 'subaru';
let age1: number = 25;
let numbers: number[] = [1, 2, 3, 4];

// String Tests

// Test 1: Equality (True)
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru'); // True (case-insensitive)

// Test 2: Strict equality (False)
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False (case-sensitive)

// Test 3: Inequality (True)
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != 'Toyota'); // True

// Test 4: Inequality (False)
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // False (case-sensitive)

// Lowercase Function Tests

// Test 5: Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True (converted to lowercase)

// Test 6: Lowercase conversion (False)
console.log("Is car === car.toLowerCase()? I predict False.");
console.log(car === car.toLowerCase()); // False (original value remains uppercase)

// Numerical Tests

// Test 7: Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age1 == 25); // True

// Test 8: Inequality (False)
console.log("Is age != 30? I predict True.");
console.log(age1 != 30); // True

// Test 9: Greater than (False)
console.log("Is age > 30? I predict False.");
console.log(age1 > 30); // False

// Test 10: Less than or equal (True)
console.log("Is age <= 25? I predict True.");
console.log(age1 <= 25); // True


// EXERCISE_25 & EXERCISE_26
let alien_color1: string = "green";

// Write one version of this program that passes the if test and another that fails.
// (The version that fails will have no output.)

alien_color1 = "red";
if (alien_color1 == "green") {
    console.log("The player just earned 5 points.");
}

// EXERCISE_27
let alien_color: string = "green";

// If the alien is green, print a message that the player earned 5 points.
if (alien_color == "green") {
    console.log("The player earned 5 points.");
}
// If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color == "yellow") {
    console.log("The player just earned 10 points.");
}
// If the alien is red, print a message that the player earned 15 points.
else if (alien_color == "red") {
    console.log("The player just earned 15 points.");
} else {
    console.log("Please select the right color.");
}

// Write three versions of this program, making sure each message is printed for the appropriate color alien.

// Version 2
alien_color = "red";
if (alien_color == "green") {
    console.log("The player earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("The player just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("Please select the right color.");
}

// Version 3
alien_color = "yellow";
if (alien_color == "green") {
    console.log("The player earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("The player just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("The player just earned 15 points.");
}
else {
    console.log("Please select the right color.");
}

// EXERCISE_28
let age: number = 15;

if (age < 2) {
    console.log("The person is a baby.");
}
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
// If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("The person is an elder.");
}

// EXERCISE_29
let favorite_fruits: string[] = ['apple', 'orange', 'grapes'];

if (favorite_fruits.includes('apple')) {
    console.log('I really like apples!');
}

if (favorite_fruits.includes('orange')) {
    console.log('I really like oranges!');
}

if (favorite_fruits.includes('mango')) {
    console.log('I really like mangoes!');
}

if (favorite_fruits.includes('grapes')) {
    console.log('I really like grapes!');
}

if (favorite_fruits.includes('bananas')) {
    console.log('I really like bananas!');
}

// EXERCISE_30
let users1: string[] = ['sana', 'babar', 'saba', 'taha', 'admin'];

for (let user of users1) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}

// EXERCISE_31
let users: string[] = ['sana', 'babar', 'saba', 'taha', 'admin'];

if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    users = [];
    console.log(`All users have been removed. Users count: ${users.length}`);
}

// EXERCISE_32
let current_users: string[] = ["saba", "admin", "ahmed", "babar", "raza"];
let new_users: string[] = ["fawad", "hussain", "user7", "admin", "User9"];

new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});

// EXERCISE_33
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for loop
for (let i = 0; i < myNumbers.length; i++) {
    // now we use conditions
    if (myNumbers[i] == 1) {
        console.log(`${myNumbers[i]}st`);
    } else if (myNumbers[i] == 2) {
        console.log(`${myNumbers[i]}nd`);
    } else if (myNumbers[i] == 3) {
        console.log(`${myNumbers[i]}rd`);
    } else if (myNumbers[i] >= 4 && myNumbers[i] <= 9) {
        console.log(`${myNumbers[i]}th`);
    }
}

// EXERCISE_34
let myPizza = ["Cheese Pizza", "Pepperoni Pizza", "Vegetarian Pizza"];

// print only names of pizza
for (let i = 0; i < myPizza.length; i++) {
    console.log(myPizza[i]);
}

/*

// EXERCISE_35
let animals: string[] = ["dog", "elephant", "rabbit"];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");

// EXERCISE_36
function make_shirt1(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt("medium", "Code is Life");

// EXERCISE_37
function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size

// EXERCISE_38
function describe_city(nameOfCity: string, country: string = "Pakistan") {
    return `${nameOfCity} is in ${country}`;
}

// 3 cities
let city1 = describe_city("Cape Town", "South Africa");
let city2 = describe_city("Delhi", "India");
let city3 = describe_city("Hyderabad", "Pakistan");
let city4 = describe_city("Dubai", "UAE");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);

// EXERCISE_39
function city_country(city: string, country: string) {
    return `${city}, ${country}`;
}

console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Dubai", "UAE"));
console.log(city_country("London", "United Kingdom"));
console.log(city_country("Riyadh", "Saudi Arabia"));

// EXERCISE_40
function myAlbum(artistName: string, albumTitle: string) {
    return { artistName, albumTitle };
}

let album1 = myAlbum("Ali", "Rang-e-Mohabbat");
let album2 = myAlbum("Madad", "Roshan Andhera");
let album3 = myAlbum("Ayaz", "Mausam-e-Dil");

console.log(album1);
console.log(album2);
console.log(album3);

// Number of tracks
function myAlbum2(artistName: string, albumTitle: string, numberOfTracks?: number) {
    return { artistName, albumTitle, numberOfTracks };
}

let album4 = myAlbum2("Ali", "dil hai", 30);
let album5 = myAlbum2("Madad", "ajeeb kahani", 55);
let album6 = myAlbum2("babar", "typescript ki coding", 78);

console.log(album4);
console.log(album5);
console.log(album6);

// EXERCISE_41
let magicianNames1 = ["Ayaz", "Fayaz", "Tariq", "Madad"];

function show_magicians1() {
    for (let item of magicianNames) {
        console.log(item);
    }
}

show_magicians1();

// EXERCISE_42
let magicianNames = ["Ayaz", "Fayaz", "Tariq", "Madad"];

function show_magicians2(greet: string) {
    for (let item of magicianNames) {
        console.log(`${greet}, ${item}`);
    }
}

show_magicians("Hello, How are you Mr.");
show_magicians("Hello, "); // 2nd time calling

// EXERCISE_43
let magicianNames2 = ["Ayaz", "Fayaz", "Tariq", "Madad"];

// Making a copy of an array
let magicianNamesCopy = [...magicianNames2];

function show_magicians(greet: string) {
    let withGreetings = "";
    for (let item of magicianNamesCopy) {
        withGreetings += `${greet} ${item}\n`;
    }
    return withGreetings;
}

let myGreetings = show_magicians("Hello");
let makeArray = myGreetings.split('\n');

console.log(makeArray);

// Original array
console.log(magicianNames2);

// EXERCISE_44
function mySandwiches(...items: string[]) {
    return `I want sandwiches of ${items}`;
}

let collection1 = mySandwiches("Ham", "Cheese", "Lettuce"); // can add as many as you wish
let collection2 = mySandwiches("Turkey", "Swiss");
let collection3 = mySandwiches(); // without argument

console.log(collection1);
console.log(collection2);
console.log(collection3);

// EXERCISE_45
function carDetails(manufacturer: string, modelName: string, ...additionalInfo: [string, any][]) {
    const car = { manufacturer, modelName, ...Object.fromEntries(additionalInfo) };
    return car;
}

const myCarDetails = carDetails("Toyota", "Corolla", ['color', 'blue'], ['year', 2022]);

console.log(myCarDetails);
*/
