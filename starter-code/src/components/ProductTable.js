import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


export default class ProductTable extends Component {
  render() {
    let data = this.props.data.sort((a,b) =>( b.category > a.category ? 1 : -1))
    let rows = []
    for (let i = 0; i < data.length; i++) {
      if (i === 0 || data[i].category !== data[i-1].category) 
        rows.push(<ProductCategoryRow key={"cat"+i} category={data[i].category}/>)
      if(data[i].name.toUpperCase().includes(this.props.searchFilter))
        rows.push(<ProductRow key={"row"+i} data={data[i]}/>)
    }

    return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
    )
  }
}
