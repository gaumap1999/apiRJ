import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Li extends Component {
  render() {
    let status = parseInt(this.props.status);   
    return (
      <li className={status === this.props.data.index ? "active" : ""} >
        <NavLink to={this.props.data.link}  >
          <i className={this.props.data.icon} />{this.props.data.name}
        </NavLink>
      </li>
    );
  }
}

export default Li;
