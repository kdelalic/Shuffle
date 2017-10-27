import React, { Component } from 'react';
import {Navbar} from 'react-materialize';
import '../css/topBar.css';
import SearchBar from './searchBar'
import logo from '../img/logo.png'


export default class TopBar extends Component {

  myCallback = (dataFromChild) => {
    this.props.parentCallBack(dataFromChild);
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar right brand={<img src={logo} className="brand-logo-img" alt="Shuffle"/>}>
          <div className="title">
            <h3 className="nowPlaying">{this.props.title}</h3>
          </div>
          <SearchBar callBack={this.myCallback}/>
        </Navbar>
      </div>
    );
  }
}