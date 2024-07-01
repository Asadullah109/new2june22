// Define the Album interface
interface Album {
    artistName: string;
    albumTitle: string;
    numberOfTracks?: number; // Make numberOfTracks optional
}

// Function to create an album object
function myAlbum1(artistName: string, albumTitle: string, numberOfTracks?: number): Album {
    return { artistName, albumTitle, numberOfTracks }; // Return correct properties
}

// Creating album object and logging it
let album: Album = myAlbum1("Asad", "Typescoding", 64);

console.log(album);
