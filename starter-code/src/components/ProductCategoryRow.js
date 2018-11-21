import React, { Component } from 'react'

export default class ProductCategoryRow extends Component {
  render() {
    // console.log(this.props)
    return <tr><th colSpan="2">{this.props.category}</th></tr>
  }
}
