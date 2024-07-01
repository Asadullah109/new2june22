let array5: number[] = []; // Correctly initializing the array
array5.push(1234); // Pushing a number into the array
console.log(array5); // Logging the array to the console



// q 19
let myname: string | null | undefined | number | boolean;

myname = 16;
console.log(myname.toString());

// Q 18
var name = "ayesha";
let name = "raza";
console.log(name); // Output: 'raza'

// Q 17


const name: string = "ayesha";
const name: string = "raza";
console.log(name);

// Q 16
/*
let e - "usa";
let f - 10.9;
f = 22;
let g - false; 
g - true

*/

let e: string = "usa";
let f: number = 10.9;
f = 22; // Reassigning a new number to f
let g: boolean = false;
g = true; // Reassigning a new boolean value to g



// Q 15

let message = "Hello world";
console.loger(message)
// Q14

let a : string = "Pakistan";
a = "USA";
let b : number = 9;
let c : boolean = true;

// Q 13

function teacherName(firstName: string, LastName?: string): string {
    if (LastName)
        return firstName + " " + LastName;
    else
        return firstName;
}

let result1 = teacherName("ariba", "memon");
console.log(result1); // Output: ariba memon
