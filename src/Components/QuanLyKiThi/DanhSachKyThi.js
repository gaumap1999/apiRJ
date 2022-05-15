import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DanhSachKyThi extends Component {
  handleClick  = (e)=>{
    sessionStorage.setItem("tenkythi",e.target.value)
  }
  render() {
      console.log(this.props.data.tenKyThi)
    return (
      <Link to="/test">
        <button type="button" className="btn btn-success btn-md" value ={this.props.data.tenKyThi} onClick = {(e)=>{this.handleClick(e)}} >
          {this.props.data.tenKyThi}
        </button>
      </Link>
    );
  }
}

export default DanhSachKyThi;
