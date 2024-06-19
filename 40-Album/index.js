"use strict";
/* TASK # 40 :
Album: Write a function called make_album() that builds a Object describing a music album.
 The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
 Use the function to make three dictionaries representing different albums.
 Print each return value to show that Objects are storing the album information correctly.
 Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
 If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album. */
function make_album(artistName, albumTitle, albumTracks) {
    let album = {
        artist: artistName,
        title: albumTitle,
    };
    if (albumTracks !== undefined) {
        album.tracks = albumTracks;
    }
    return album;
}
let album1 = make_album("Farhan Saeed", "Aadat");
console.log(album1);
let album2 = make_album("Asim Azhar", "Long Time No See");
console.log(album2);
let album3 = make_album("Abrar-ul-Haq", "Nach Punjaban");
console.log(album3);
let albumWithTracks = make_album("Atif Aslam", "Jal Pari", 11);
console.log(albumWithTracks);
// type makeAlbum = {
//   artistName: string;
//   albumTitle: string;
//   albumTracks?: number;:
// }
// function make_album(artistName: string, albumTitle: string, albumTracks: number): makeAlbum {
//   if(make)
// }
// let musicAlbum = make_album("Farhan Saeed", "Aadat");
// let make_album: makeAlbum = {
//   artistName: "Farhan Saeed",
//   albumTitle: "Aadat",
// };
// console.log(make_album);
// make_album = {
//   artistName: "Asim Azhar",
//   albumTitle: "Long Time No See",
// };
// console.log(make_album);
// make_album = {
//   artistName: "Abrar-ul-Haq",
//   albumTitle: "Nach Punjaban",
// };
// console.log(make_album);
// const albumWithTracks: makeAlbum = {
//   artistName: "Atif Aslam",
//   albumTitle: "Jal Pari",
//   albumTracks: "11",
// };
// console.log(albumWithTracks);
// function make_album(artist: string, title: string, tracks?: number) {
//   let album = { artist, title, tracks };
//   if (tracks !== undefined) {
//       album["tracks"] = tracks;
//   }
//   return album;
// }
// console.log(make_album("Artist One", "The First Album"));
// console.log(make_album("Artist Two", "The Second Album"));
// console.log(make_album("Artist Three", "The Third Album", 12));
