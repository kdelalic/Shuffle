import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';
import '../css/controls.css';

/** @module controls */
/** The component that contains control bar that allows the user to pause the video or move to the next or previous video. */
export default class Controls extends Component {
  /** Initilizes the controls.  Sets the initial state of the play button to pause. */
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.song !== this.state.song) {
      this.setState({ song: nextProps.song });
    }
  }

  /** Called when the next button is pressed.  Advances the song. */
  handleNext(event) {
    this.props.songCallback(++this.state.song);
  }

  /** Called when the play/puase button is pressed.  Pauses a video that is currently playing a plays a video that is currently puased. */
  handlePlayPause(event) {
    if(this.state.playPause === "pause"){
      this.props.player.pauseVideo();
      this.setState({ playPause: "play_arrow"});
    } else if(this.state.playPause === "play_arrow"){
      this.props.player.playVideo();
      this.setState({ playPause: "pause"});
    } 
  }

  /** Called when the previous button is pressed.  Plays the previously played song. */
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