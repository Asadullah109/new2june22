let newAge = Math.random() > 0.6 ? "Khan" : 60;
//newAge.toLowerCase();//Error: Transpiler cannot narrow
if (newAge === "Khan") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
if (typeof newAge === "string") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
typeof newAge === "string"
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number
console.log(newAge.toLocaleString);
console.log(newAge);
export {};
