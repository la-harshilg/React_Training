import React, { Component } from "react";
import "./Search-box.style.css";

export default class SearchBox extends Component {
  render() {
    return (
      <input
        className="search-box"
        type="text"
        placeholder="Search for Monsters"
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
