// Function to create an album object
function myAlbum(artistName, albumTitle, numberOfTracks) {
    return { artistName, albumTitle, numberOfTracks };
}
// Creating album objects and logging them
let album4 = myAlbum("Ali", "dil hai", 30);
let album5 = myAlbum("Madad", "ajeeb kahani", 55);
let album6 = myAlbum("Babar", "typescript ki coding", 78);
console.log(album4);
console.log(album5);
console.log(album6);
function myAlbum1(artistName, albumTitle, numberofTracks) {
    return { artistName: albumTitle, numberOfTracks };
}
let album = myAlbum1("asad", "Typescoding", 64);
console.log(album);
export {};
