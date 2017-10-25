import React, { Component } from 'react';
import "../css/app.css";
import Video from "./video";
import TopBar from "./topBar";

export default class App extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	        searchQuery: "gorillaz"
	    };    
	}

	myCallback = (dataFromChild) => {
		this.setState({ searchQuery: dataFromChild });
	}

    render() {
	    return (
	      <div>
	        <TopBar parentCallBack={this.myCallback}/>
    		<Video query={this.state.searchQuery} />
	      </div>
	    );
  	}
}