
var Music = require('./Music.js');

function LoadMusic(Music_DB){
  Music_DB.addMusic(1, new Music(1, "I'm Drowning", "A Boogie wit da Hoodie", "/ImDrowning.jpg", "/I'm\ drowning.mp3", ["Rap", "Pop", "Edm"]));
  Music_DB.addMusic(2, new Music(2, "All My Friends Are Dead", "Lil Uzi Vert", "/AllMyFriendsAreDead.jpg", "/All\ My\ Friends\ Are\ Dead.mp3", ["Rap", "Edm"]));
  Music_DB.addMusic(3, new Music(3, "Plain Jane", "A$AP Ferg", null, "/Plain\ Jane.mp3", ["Rap"]));
}

module.exports = LoadMusic;
