/* TASK # 40 :
Album: Write a function called make_album() that builds a Object describing a music album.
 The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
 Use the function to make three dictionaries representing different albums.
 Print each return value to show that Objects are storing the album information correctly.
 Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
 If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 Make at least one new function call that includes the number of tracks on an album. */

function make_album(
  artistName: string,
  albumTitle: string,
  albumTracks?: number
) {
  let album: { artist: string; title: string; tracks?: number } = {
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

