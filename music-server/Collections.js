
var Music = require('./Music.js');

function getCollections(Music_DB){
  var collections = {};
  var songs = Music_DB.songs;
  for(var musicID in songs){
    var music = songs[musicID];
    for(var i in music.genres){
      var genre = music.genres[i]
      if(!(genre in collections)){
        collections[genre] = [];
      }
      collections[genre].push(musicID);
    }
  }
  return collections;
}

var collections = {
  list : {},

  initCollections : function(Music_DB){
    var songs = Music_DB.songs;
    for(var musicID in songs){
      var music = songs[musicID];
      for(var i in music.genres){
        var genre = music.genres[i]
        if(!(genre in this.list)){
          this.list[genre] = [];
        }
        this.list[genre].push(musicID);
      }
    }
    return this.list;
  },

  getCollectionTitles : function(){
    var titles = [];
    for(var name in this.list){
      titles.push(name);
    }
    return titles;
  }
}

module.exports = {getCollections: getCollections,
  collections: collections
};
