function teacherName(firstName: string, LastName?: string): string {
    if (LastName)
        return firstName + " " + LastName;
    else
        return firstName;
}

let result1 = teacherName("ariba", "memon");
console.log(result1); // Output: ariba memon


// Q 11

type Student = {
    name: string,
    age: number
}

let student: Student = {
    name: "Hira",
}

console.log(student.name);

// Q 10

function add(X: number, Y: number): number {
    return X + Y;
}

console.log(add(5,5));

// Q 09

let student_Giaic = {
    name: "hisham",
    age: 20,
}

console.log(student_Giaic.name);

// Q 08

let myAge: string | number;

myAge = 16;
console.log(myAge);

console.log(myAge.toLowerCase());

//Q 07

let age: number | "died" | "unknown";

age = 90;
age = "died";
age = "unknown";
age = "living";


// Q 06 

let myname: string | undefined;

myname = null;
console.log(myname);

myname = "Ayesha";
console.log(myname);