import React, { Component } from 'react'

export default class SearchBar extends Component {
  changeSearchBar(e){
    this.props.searchState(e.target.value.toUpperCase());
  }

  toggleStocked(e){
    this.props.toggleStocked(e.target.checked)
  }

  render() {
    return (
      <div className="search-bar">
        <input type="text" name="search" onChange={(e) => this.changeSearchBar(e)}/>
        <span className="checkbox"><input type="checkbox" checked="this.props.stocked" onChange={(e => {this.toggleStocked(e)})}/>
        <label htmlFor="inStock">Only show items that are in stock</label></span>
      </div>
    )
  }
}
