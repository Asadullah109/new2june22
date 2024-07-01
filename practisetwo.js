function getFirstElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[0];
}
// Example usage:
const myArray = ["apple", "banana", "cherry"];
const firstElement = getFirstElement(myArray);
console.log(firstElement); // Output: "apple"
function getFirstElement1(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[0];
}
const myArray1 = ["painapple", " Mango", "grapes"];
const firstElement1 = getFirstElement1(myArray1);
console.log(firstElement1);
function getFirstElement2(arr) {
    if (arr.length === 1) {
        return undefined;
    }
    return arr[1];
}
const myArray2 = ["painapple", "Manngo", "grapes"];
const firstElement2 = getFirstElement2(myArray2);
//console.log(myArray2);
console.log(myArray2[1]);
export {};
