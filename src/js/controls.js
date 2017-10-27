import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';
import '../css/controls.css';

export default class Controls extends Component {

  constructor(props) {
    super(props);
    this.state = {
      song: 0,
      playPause: "pause"
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }


  handleNext(event) {
    this.props.songCallback(++this.state.song);
  }

  handlePlayPause(event) {
    if(this.state.playPause === "pause"){
      this.props.player.pauseVideo();
      this.setState({ playPause: "play_arrow"});
    } else if(this.state.playPause === "play_arrow"){
      this.props.player.playVideo();
      this.setState({ playPause: "pause"});
    } 
  }

  handlePrevious(event) {
    if(this.state.song - 1 < 0){
      alert("There are no more previous songs");
    } else {
      this.props.songCallback(--this.state.song);
    }
  }

  render() {
    return (
      <div className="wrapperControls">
        <Button waves='light' className="button" onClick={this.handlePrevious} icon='skip_previous' />
        <Button waves='light' className="button" onClick={this.handlePlayPause}><Icon onClick={this.handlePlayPause}>{this.state.playPause}</Icon></Button>
        <Button waves='light' className="button" onClick={this.handleNext} icon='skip_next' />
      </div>
    );
  }
}