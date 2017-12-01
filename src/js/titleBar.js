import React, { Component } from 'react';
import '../css/titleBar.css';
/** @module TopBar */
/** The top bar component of the webpage.  Contains the logo, now playing bar and the search bar.*/
export default class TitleBar extends Component {

  render() {
    return (
      <div className="wrapperTitle">
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}