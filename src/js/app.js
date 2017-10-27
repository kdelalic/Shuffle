import React, { Component } from 'react';
import "../css/app.css";
import Video from "./video";
import TopBar from "./topBar";
import Controls from "./controls"

export default class App extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	        searchQuery: "kanye west",
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
	      <div>
	        <TopBar parentCallBack={this.myCallback} title={this.state.title}/>
    		<Video query={this.state.searchQuery} titleCallback={this.title} playerCallback={this.player} songCallback={this.song} song={this.state.song}/>
    		<Controls song={this.state.song} songCallback={this.song} player={this.state.player}/>
	      </div>
	    );
  	}
}