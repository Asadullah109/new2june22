/*
function getFirstElement(strings: string[]): string | undefined {
    if (strings.length === 0) {
        return undefined;
    }
    return strings[0];
}

// Example usage
const array = ["apple", "banana", "cherry"];
const firstElement = getFirstElement(array);
console.log(firstElement); // Output: "apple"

*/


function getFirstElement(strings: string[]): string | undefined {
    if (strings.length === 0) {
        return undefined;
    }
    return strings[0];
}

const array = ["kaila", "amroud", "jamun"];
const firstElement = getFirstElement(array);
console.log(firstElement);