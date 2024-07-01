// EXERCISE_35
let animals = ["dog", "elephant", "rabbit"];
animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");
/*
// EXERCISE_36
function make_shirt(size: string, message: string) {
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
*/
// EXERCISE_38
function describe_city(nameOfCity, country = "Pakistan") {
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
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Dubai", "UAE"));
console.log(city_country("London", "United Kingdom"));
console.log(city_country("Riyadh", "Saudi Arabia"));
function myAlbum(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = myAlbum("Ali", "Rang-e-Mohabbat");
let album2 = myAlbum("Madad", "Roshan Andhera");
let album3 = myAlbum("Ayaz", "Mausam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
/*

// Number of tracks
function myAlbum2(artistName: string, albumTitle: string, numberOfTracks?: number): Album {
    return { artistName, albumTitle, numberOfTracks };
}

let album4: Album = myAlbum2("Ali", "dil hai", 30);
let album5: Album = myAlbum2("Madad", "ajeeb kahani", 55);
let album6: Album = myAlbum2("babar", "typescript ki coding", 78);

console.log(album4);
console.log(album5);
console.log(album6);
*/
// EXERCISE_41
let magicianNames1 = ["Ayaz", "Fayaz", "Tariq", "Madad"];
function show_magicians1() {
    for (let item of magicianNames1) {
        console.log(item);
    }
}
show_magicians1();
// EXERCISE_42
let magicianNames2 = ["Ayaz", "Fayaz", "Tariq", "Madad"];
function show_magicians2(greet) {
    for (let item of magicianNames2) {
        console.log(`${greet}, ${item}`);
    }
}
show_magicians2("Hello, How are you Mr.");
show_magicians2("Hello, "); // 2nd time calling
// EXERCISE_43
let magicianNames3 = ["Ayaz", "Fayaz", "Tariq", "Madad"];
// Making a copy of an array
let magicianNamesCopy = [...magicianNames3];
function show_magicians3(greet) {
    let withGreetings = "";
    for (let item of magicianNamesCopy) {
        withGreetings += `${greet} ${item}\n`;
    }
    return withGreetings;
}
let myGreetings = show_magicians3("Hello");
let makeArray = myGreetings.split('\n');
console.log(makeArray);
// Original array
console.log(magicianNames3);
// EXERCISE_44
function mySandwiches(...items) {
    return `I want sandwiches of ${items}`;
}
let collection1 = mySandwiches("Ham", "Cheese", "Lettuce"); // can add as many as you wish
let collection2 = mySandwiches("Turkey", "Swiss");
let collection3 = mySandwiches(); // without argument
console.log(collection1);
console.log(collection2);
console.log(collection3);
function carDetails(manufacturer, modelName, ...additionalInfo) {
    const car = { manufacturer, modelName, ...Object.fromEntries(additionalInfo) };
    return car;
}
const myCarDetails = carDetails("Toyota", "Corolla", ['color', 'blue'], ['year', 2022]);
console.log(myCarDetails);
export {};
