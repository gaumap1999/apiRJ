import React, { Component } from "react";

class ItemKyThi extends Component {
  render() {
    console.log(this.props.data.tenKyThi)
    return (
          <option value = {this.props.data.tenKyThi}>{this.props.data.tenKyThi}</option>
    );
  }
}

export default ItemKyThi;
