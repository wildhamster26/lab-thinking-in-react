import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div class="search-bar">
        <input type="text" name="search"/>
        <span class="checkbox"><input type="checkbox" name="inStock"/>
        <label for="inStock">Only show items that are in stock</label></span>
      </div>
    )
  }
}
