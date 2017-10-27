import React, { Component } from "react";
import YouTube from "react-youtube";
import shuffle from "shuffle-list";
import searchVideo from "./search.js";
import "../css/video.css";

export default class Video extends Component {
  constructor() {
    super();
    this.state = {
      videoQueue: [],
      videoTitles: [],
      song: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.song !== this.props.song) {
      this.setState({song: nextProps.song});
    }
    if (nextProps.query !== this.props.query) {
      this.updatePlaylist(nextProps.query);
    }
  }

  // never update state in here, it will cause an infinite loop
  componentWillUpdate(nextProps, nextState) {
    if (
      this.state.song !== nextState.song ||
      this.state.videoQueue !== nextState.videoQueue
    ) {
  		this.state.player.loadVideoById(nextState.videoQueue[nextState.song]);
      this.props.titleCallback(nextState.videoTitles[nextState.song]);
      document.title = nextState.videoTitles[nextState.song];
      this.props.playerCallback(this.state.player);
    }
  }

  updatePlaylist(query) {
    searchVideo(query).then(vids => {
      var shuffledVids = shuffle(vids);
      var videoIDs = [];
      var titles = [];

      //Removes "(" and "[" from video title and separates 2d array into two 1d arrays
      for(var i = 0; i < vids.length; i++){
        videoIDs[i] = shuffledVids[i][0];
        if(shuffledVids[i][1].indexOf("(") !== -1){
          titles[i] = shuffledVids[i][1].replace(shuffledVids[i][1].substring(shuffledVids[i][1].indexOf("("), shuffledVids[i][1].indexOf(")") + 1), "");
        } else if(shuffledVids[i][1].indexOf("[") !== -1){
          titles[i] = shuffledVids[i][1].replace(shuffledVids[i][1].substring(shuffledVids[i][1].indexOf("["), shuffledVids[i][1].indexOf("]") + 1), "");
        } else {
         titles[i] = shuffledVids[i][1];
        }
      }

      this.setState({
        videoQueue: videoIDs,
        videoTitles: titles,
        song: 0
      });
    });
  }

  onPlayerReady(event) {
    this.setState(
      {
        player: event.target
      },
      () => {
        this.updatePlaylist(this.props.query);
      }
    );
  }

  goToNextSong(event) {
    this.setState({
      song: this.state.song + 1
    });
  }

  render() {
    return (
      <div className="wrapperYoutube">
          <YouTube className="vid"
            onReady={this.onPlayerReady.bind(this)}
            onEnd={this.goToNextSong.bind(this)}
            onError={this.goToNextSong.bind(this)}
          />
      </div>
    );
  }
}