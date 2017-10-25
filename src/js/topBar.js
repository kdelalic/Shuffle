import React, { Component } from 'react';
import {Navbar} from 'react-materialize';
import '../css/topBar.css';
import SearchBar from './searchBar'


export default class TopBar extends Component {

  myCallback = (dataFromChild) => {
    this.props.parentCallBack(dataFromChild);
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar className="logo" brand='Shuffle+' right>
          <SearchBar callBack={this.myCallback}/>
        </Navbar>
      </div>
    );
  }
}