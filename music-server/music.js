
var fs = require('fs');

class Music{
  constructor(id, name, artist, displayImgFile, dataFile, genres_list){
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.displayImgFile = displayImgFile;
    this.dataFile = dataFile;
    this.genres = ['All'];
    if(genres_list != null){
      for(var i in genres_list){
        this.genres.push(genres_list[i]);
      }
    }
  }


  //Getter
  get id(){
    return this._id;
  }
  //Setter
  set id(val){
    this._id = val;
  }

  get name(){
    return this._name;
  }
  set name(val){
    this._name = val;
  }

  get artist(){
    return this._artist;
  }
  set artist(val){
    this._artist = val;
  }

  get displayImgFile(){
    return this._displayImgFile;
  }

  get genres(){
    return this._genres;
  }

  set genres(val){
    this._genres = val;
  }

  set displayImgFile(val){
    this._displayImgFile = val;
  }

  get dataFile(){
    return this._dataFile;
  }
  set dataFile(val){
    this._dataFile = val;
  }


  //return a stream of the music data.
  stream(){
    var fileName = __dirname + '/songs' + this.dataFile;
    var stats = fs.statSync(fileName);
    var stream = fs.createReadStream(fileName);
    return {
      stream : stream,
      stats : stats
    };
  }

  //returns the image data.
  getImg(){
    if(this.displayImgFile) {
      var fileName = __dirname + '/displayImages' + this.displayImgFile;
      var imgData = fs.readFileSync(fileName);
      return imgData;
    }
    else {
      return null;
    }
  }

  //returns information related to the music file.
  getInfo(){
    return {
      id : this.id,
      name : this.name,
      artist : this.artist
    };
  }
}

module.exports = Music;
