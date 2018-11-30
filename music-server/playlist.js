
var Music = require('./music.js');

var Playlist = [];

Playlist.push(new Music(1, "I'm Drowning", "A Boogie wit da Hoodie", "/ImDrowning.jpg", "/I'm\ drowning.mp3"));
Playlist.push(new Music(2, "All My Friends Are Dead", "Lil Uzi Vert", "/AllMyFriendsAreDead.jpg", "/All\ My\ Friends\ Are\ Dead.mp3"));
Playlist.push(new Music(3, "Plain Jane", "A$AP Ferg", null, "/Plain\ Jane.mp3"));

function getMusicWithId(id, playlist) {
  var i;
  for(i = 0; i < playlist.length; i++) {
    if(playlist[i].id == id){
      return playlist[i];
    }
  }
  return null;
}

module.exports = {
  Playlist : Playlist,
  getMusicWithId : getMusicWithId
};
