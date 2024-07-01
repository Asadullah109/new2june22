/*                       Quistion 14 Answers
type A = {
    name: string,
}

type B = A & {
    age: number,
}

const person: B = {
    name: "ASSAD",
    age: 55
};

console.log(person.name);
console.log(person.age);

*/
const person = {
    name: "ASSAD",
    age: 55
};
console.log(person.name); // Output: ASSAD
console.log(person.age); // Output: 55
export {};
