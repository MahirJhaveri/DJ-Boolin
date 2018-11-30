
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import '../Stylesheets/Player.css';

export default class Player extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      collection: this.props.collection,
      music_id: null,
      music_url: null,
      music_info: {},
      music_photo: null,
      loading: true,
      ip: '10.105.226.212',
      port: '8000'
    };
    this.getMusicID.bind(this);
    this.getMusicInfo.bind(this);
    this.setMusicUrl.bind(this);
    this.playNewSong.bind(this);
  }

  getMusicID(){
    var state = this.state;
    var ip = state.ip;
    var port = state.port;
    var collection = this.state.collection;
    fetch('http://' + ip + ':' + port + '/musicID?collection=' + collection)
    .then(function(data){
      return data.json();
    })
    .then(function(id){
      state.music_id = id;
    });
  }

  getMusicInfo(){
    var state = this.state;
    var ip = state.ip;
    var port = state.port;
    var musicID = state.music_id;
    fetch('http://' + ip + ':' + port + '/info?id=' + musicID)
    .then(function(data){
      console.log(data);
      return data.json();
    })
    .then(function(info){
      state.music_info = info;
    });
  }

  setMusicUrl(){
    var state = this.state;
    var ip = state.ip;
    var port = state.port;
    var musicID = state.music_id;
    state.music_url = 'http://' + ip + ':' + port + '/music?id=' + musicID;
  }

  playNewSong(){
    var state = this.state;
    var ip = state.ip;
    var port = state.port;
    var collection = this.state.collection;
    var root = this;
    fetch('http://' + ip + ':' + port + '/musicID?collection=' + collection)
    .then(function(data){
      return data.json();
    })
    .then(function(id){
      state.music_id = id;
      fetch('http://' + ip + ':' + port + '/info?id=' + id)
      .then(function(data){
        console.log(data);
        return data.json();
      })
      .then(function(info){
        state.music_info = info;
        state.music_photo = 'http://' + ip + ':' + port + '/displayImage?id=' + id;
        root.setMusicUrl();
        root.state.loading = false;
        root.setState(state);
        console.log(root.state);
      });
    });
  }

  render(){

    var state = this.state;

    return (
      <div>
        <div className="inLine">
          <div>
            <h1 id = "my-title">
              {(state.loading === true) ? <span>'Title not loaded'</span> : state.music_info.name}
            </h1>
            <h4 id = "my-artist">
              {(state.loading === true) ? <span>'Title not loaded'</span> : ' -' + state.music_info.artist}
            </h4>
          </div>
          <div>
            <img className="image" src={state.music_photo} />
          </div>
        </div>

        <div>
          <ReactAudioPlayer
            className="audioPlayer"
            preload="none"
            src={(state.loading === false) ? state.music_url : ''}
            //autoPlay
            controls
            controlsList="nodownload"
          />
        </div>
      </div>
        );
        }


  componentDidMount(){
    this.playNewSong();
  }
        };
