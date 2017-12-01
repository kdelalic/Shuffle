import React, { Component } from 'react';
import {Navbar} from 'react-materialize';
import '../css/topBar.css';
import SearchBar from './searchBar'
import logo from '../img/logo.png'
/** @module TopBar */
/** The top bar component of the webpage.  Contains the logo, now playing bar and the search bar.*/
export default class TopBar extends Component {

  myCallback = (dataFromChild) => {
    this.props.parentCallBack(dataFromChild);
  }

  render() {
    return (
      <div className="wrapperTopBar">
        <Navbar right brand={<img src={logo} className="brand-logo-img" alt="Shuffle"/>}>
          <SearchBar callBack={this.myCallback}/>
        </Navbar>
      </div>
    );
  }
}