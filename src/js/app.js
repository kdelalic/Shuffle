import React, { Component } from 'react';
import "../css/app.css";
import Video from "./video";
import TopBar from "./topBar";
import Controls from "./controls"
import TitleBar from "./titleBar"

/** @module App */
/** The main app container for all the components.  Contains the top bar, video player and the controls.*/
export default class App extends Component {
	/** Initilizes the base state for the entire webpage */
	constructor(props) {
	    super(props);
	    this.state = {
	        searchQuery: "",
	        title: "",
	        song: 0,
	        player: undefined
	    };    
	}

	myCallback = (dataFromChild) => {
		this.setState({ searchQuery: dataFromChild });
	}

	title = (dataFromChild) => {
		this.setState({ title: dataFromChild});
	}

	song = (dataFromChild) => {
		this.setState({ song: dataFromChild});
	}

	player = (dataFromChild) => {
		this.setState({ player: dataFromChild});
	}

    render() {
	    return (
	      <div className="box">
	        <TopBar parentCallBack={this.myCallback}/>
    		<Video query={this.state.searchQuery} titleCallback={this.title} playerCallback={this.player} songCallback={this.song} song={this.state.song}/>
    		<TitleBar title={this.state.title}/>
    		<Controls song={this.state.song} songCallback={this.song} player={this.state.player}/>
	      </div>
	    );
  	}
}