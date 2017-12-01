import React, { Component } from 'react';
import {NavItem, Icon} from 'react-materialize';
import '../css/searchBar.css';

/** @module searchBar */
/** The search bar component where the user can enter their search query */
export default class SearchBar extends Component {
  /** Initilizes the search and sets the text it contains to an empty string */
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**Called when the user inputs text.  Allows the text contained in the search bar to change*/
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  /**Called when the user submits a search query.  Clears the text in the search bar. */
  handleSubmit(event) {
    this.props.callBack(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">
        <NavItem className="searchButton" onClick={this.handleSubmit}>
              <Icon>search</Icon>
        </NavItem>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            <input className="input" type="text" value={this.state.value} onChange={this.handleChange} /> 
          </label>
        </form>
      </div>
    );
  }
}