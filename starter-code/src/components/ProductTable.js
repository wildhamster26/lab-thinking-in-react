import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';


export default class ProductTable extends Component {
  createTable(){
    let data = this.props.data
    // let catArr = []; 
    // data.map(item => {
    //   if (!catArr.includes(item.category)) {
    //     catArr.push(item.category)
    //   }} 
    // );
    // let headers = []

    // for(let i =0; i<catArr.length; i++){
    //     headers.push(<ProductCategoryRow category={this.props.data.data[i].category}/>);
    // }
    
    // console.log(headers);

    //     let content = <ProductRow data={this.props.data.data[0]}/>;
  
  }

  render() {
    let data = this.props.data.sort((a,b) =>( b.category > a.category ? 1 : -1))

    let rows = []
    for (let i = 0; i < data.length; i++) {
      if (i === 0 || data[i].category !== data[i-1].category) 
        rows.push(<ProductCategoryRow category={data[i].category}/>)
      rows.push(<ProductRow data={data[i]}/>)
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
          {/* {this.createTable()} */}
        </table>
    )
  }
}
