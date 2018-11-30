
var express = require('express');
var fs = require('fs');
var sendSeekable = require('send-seekable');
var cors = require('cors');

var local_ip = require('./IPAddress.js');

//var local_ip = require('local-ip')('lo'); //remove local-ip package


//var getMusicWithId = require('./playlist.js').getMusicWithId;
var Music_DB = require('./Songs_DB.js');
var Music_Loader = require('./Song_Loader.js');
Music_Loader(Music_DB);
var collections = require('./Collections.js').collections;
collections.initCollections(Music_DB);
//var Music = require('./music.js');


var app = express();
app.use(cors());
app.use(sendSeekable);

var index = {
  1 : '/All\ My\ Friends\ Are\ Dead.mp3',
  2 : '/Goosebumps.mp3',
  3 : '/Plain\ Jane.mp3',
  4 : "/I'm\ drowning.mp3"
}

function test(){

}
//test();

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.redirect("/home.html");
});

app.get('/music', function(req, res){
  var musicId = req.query.id;
  var music = Music_DB.getMusicByID(musicId);
  if(music){
    var musicStream = music.stream();
    res.sendSeekable(musicStream.stream, {
      type : "audio/mp3",
      length : musicStream.stats.size
    });
    //musicStream.stream.pipe(res);
  }
  else{} //Do something, handle error/ exception
})

app.get('/displayImage', function(req, res) {
  var musicId = req.query.id;
  var music = Music_DB.getMusicByID(musicId);
  if(music){
    var imgData = music.getImg();
    if(imgData){
      res.writeHead(200, {'Content-Type': 'image/gif' });
      res.end(imgData, 'binary');
    }
    else{}
  }
  else{}
});

app.get('/info', function(req, res) {
  var musicId = req.query.id;
  var music = Music_DB.getMusicByID(musicId);
  if(music) {
    res.json(music.getInfo());
  }
  else {
    return null; //temporary action
  }
});

app.get('/collectionTitles', function(req, res){
  var collectionTitles = collections.getCollectionTitles();
  res.json(collectionTitles);
});

app.get('/musicID', function(req, res){
  var collection = req.query.collection;
  var collectionSize = collections.list[collection].length;
  var index = Math.floor(Math.random()*collectionSize);
  res.json(collections.list[collection][index]);
});

app.listen(8000, function(){
  console.log("Listening at  http://" + local_ip + ":8000");
})
