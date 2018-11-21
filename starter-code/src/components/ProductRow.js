import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.price}</td>
      </tr>
    )
  }
}
