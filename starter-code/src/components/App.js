import React, { Component } from 'react';
import '../App.css';
import data from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: "",
      stocked: false
    }
  }

  searchState = (character) => {
    this.setState({
      search: character
    })
  }

  toggleStocked = (newStocked) => {
    this.setState({
      stocked: newStocked
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Products:</h1>
        <SearchBar
          searchState={this.searchState}
          toggleStocked={this.toggleStocked}
          stocked={this.state.stocked}
        />
        <ProductTable 
          searchFilter={this.state.search}
          data={data}/>
      </div>
    );
  }
}

export default App;
