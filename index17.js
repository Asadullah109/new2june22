// EXERCISE_11
let members = ['azam', 'saqlain', 'mehmood', 'saba', 'sana'];
for (let i = 0; i < members.length; i++) {
    console.log(members[i]);
}
// EXERCISE_12
let members2 = ['azam', 'saqlain', 'mehmood', 'saba', 'sana'];
let message2 = 'kal birthday hai kis ki:';
for (let i = 0; i < members2.length; i++) {
    console.log(message2 + members2[i]);
}
// EXERCISE_13
let vehicles = ['bike', 'car'];
for (let i = 0; i < vehicles.length; i++) {
    console.log(`My vehicle is ${vehicles[i]}`);
}
// EXERCISE_14
let guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Respected Sir/Madam ${guest_list[i]},\nWe invited you for dinner tomorrow.\nThank You\n`);
}
// EXERCISE_15
let guest_list2 = ['ali', 'farhan', 'raza', 'ayesha'];
let not_present = 'farhan';
let new_guest = 'Babar Azam';
guest_list2[1] = new_guest;
for (let i = 0; i < guest_list2.length; i++) {
    console.log(`Respected Sir/Madam ${guest_list2[i]},\nWe invited you for dinner tomorrow.\nThank You\n`);
}
// EXERCISE_16
let guest_list3 = ['ali', 'farhan', 'raza', 'ayesha'];
let not_present2 = 'farhan';
let new_guest2 = 'Babar Azam';
guest_list3[1] = new_guest2;
for (let i = 0; i < guest_list3.length; i++) {
    console.log(`Respected Sir/Madam ${guest_list3[i]},\nWe invited you for dinner tomorrow.\nThank You\n`);
}
guest_list3.unshift('shaheen', 'sarfaraz', 'rizwan');
for (let i = 0; i < guest_list3.length; i++) {
    console.log(`Respected Sir/Madam ${guest_list3[i]},\nWe invited you for dinner tomorrow. We found a bigger table so we decided to invite 3 more guests.\nThank You\n`);
}
console.log('\nUnfortunately, we cannot arrange a bigger table, only two people are invited.');
while (guest_list3.length > 2) {
    let remove_guest = guest_list3.pop();
    console.log(`Sorry Mr. ${remove_guest}, you are not invited for dinner.`);
}
for (let i = 0; i < guest_list3.length; i++) {
    console.log(`Respected Sir/Madam ${guest_list3[i]},\nYES, YOU ARE STILL INVITED for tomorrow's dinner.\nThank You\n`);
}
guest_list3.splice(0, 2);
console.log(guest_list3);
// EXERCISE_17
let guest_list4 = ['ali', 'farhan', 'raza', 'ayesha'];
let not_present3 = 'farhan';
let new_guest3 = 'Babar Azam';
guest_list4[1] = new_guest3;
for (let i = 0; i < guest_list4.length; i++) {
    console.log(`Respected Sir/Madam ${guest_list4[i]},\nWe invited you for dinner tomorrow.\nThank You\n`);
}
guest_list4.unshift('shaheen', 'sarfaraz', 'rizwan');
for (let i = 0; i < guest_list4.length; i++) {
    console.log(`Respected Sir/Madam ${guest_list4[i]},\nWe invited you for dinner tomorrow. We found a bigger table so we decided to invite 3 more guests.\nThank You\n`);
}
console.log('\nUnfortunately, we cannot arrange a bigger table, only two people are invited.');
while (guest_list4.length > 2) {
    let remove_guest = guest_list4.pop();
    console.log(`Sorry Mr. ${remove_guest}, you are not invited for dinner.`);
}
for (let i = 0; i < guest_list4.length; i++) {
    console.log(`Respected Sir/Madam ${guest_list4[i]},\nYES, YOU ARE STILL INVITED for tomorrow's dinner.\nThank You\n`);
}
guest_list4.splice(0, 2);
console.log(guest_list4);
// EXERCISE_18
let places = ['cape town', 'delhi', 'faisalabad', 'bankok', 'ahmedabad'];
console.log('Original:', places);
console.log('Copy:', [...places].sort());
console.log('Original:', places);
console.log('Reverse alphabetical order:', [...places].sort().reverse());
console.log('Original:', places);
console.log('Reverse the order:', places.sort());
console.log('Original:', places);
console.log('Reverse again:', places.sort().reverse());
// EXERCISE_19
let guest_list5 = ['ali', 'farhan', 'raza', 'ayesha'];
let not_present4 = 'farhan';
let new_guest4 = 'Babar Azam';
guest_list5[1] = new_guest4;
console.log('Original:', places.sort());
console.log('Reverse alphabetical order:', [...places].sort().reverse());
// EXERCISE_20
const languages = ['english', 'urdu', 'hindi', 'french', 'arabic'];
console.log("List of languages:");
for (let language of languages) {
    console.log(language);
}
export {};
