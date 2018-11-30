
var Music = require('./Music.js');

var Music_DB = {
  songs : {},

  addMusic : function(id, new_music){
    if(id in this.songs){
      return 0;
    }
    else{
      this.songs[id] = new_music;
      return 1;
    }
  },

  getMusicByID : function(id){
    if(id in this.songs){
      return this.songs[id];
    }
    return null;
  },

  filterMusic : function(categories){   //may need revision...
    var collection = [];
    if(categories !== null){
      for(var music in songs){
        for(var category in categories){
          if(category in songs[music] && songs[music][category] === categories[category]){
            collection.push(songs[music].getID());
          }
        }
      }
      return collection;
    }
    return null;
  },

  modifyMusic : function(id, changed_music){
    if(id in songs){
      songs[id] = changed_music;
      return 1;
    }
    return 0;
  }
};

module.exports = Music_DB;
