import React, { Component } from 'react';
import {NavItem, Icon} from 'react-materialize';
import '../css/searchBar.css';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

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