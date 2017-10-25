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
      song: 0
    };
  }

  componentWillReceiveProps(nextProps) {
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
    }
  }

  updatePlaylist(query) {
    searchVideo(query).then(vids => {
      this.setState({
        videoQueue: shuffle(vids),
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
      <div className="wrapper">
          <YouTube className="vid"
            onReady={this.onPlayerReady.bind(this)}
            onEnd={this.goToNextSong.bind(this)}
            onError={this.goToNextSong.bind(this)}
          />
      </div>
    );
  }
}

// //Function to skip song and play next
// function nextVideo() {
//   player.loadVideoById(vid[++song]);
// }
