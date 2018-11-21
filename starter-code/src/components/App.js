import React, { Component } from 'react';
import '../App.css';
import data from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Products:</h1>
        <SearchBar/>
        <ProductTable 
        data={data}/>
      </div>
    );
  }
}

export default App;
