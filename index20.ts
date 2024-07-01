// Define the Album interface
interface Album {
    artistName: string;
    albumTitle: string;
    numberOfTracks?: number; // Make numberOfTracks optional
}

// Function to create an album object
function myAlbum(artistName: string, albumTitle: string, numberOfTracks?: number): Album {
    return { artistName, albumTitle, numberOfTracks };
}

// Creating album objects and logging them
let album4: Album = myAlbum("Ali", "dil hai", 30);
let album5: Album = myAlbum("Madad", "ajeeb kahani", 55);
let album6: Album = myAlbum("Babar", "typescript ki coding", 78);

console.log(album4);
console.log(album5);
console.log(album6);


interface Album {
    artistName: string;
    albumTitle: string;
    numberofTrack?: number; // make number optional
}

function myAlbum1(artistName: string, albumTitle: string, numberofTracks?: number): Album {
    return { artistName: albumTitle, numberOfTracks};
}

let album: Album = myAlbum1("asad", "Typescoding", 64);

console.log(album);