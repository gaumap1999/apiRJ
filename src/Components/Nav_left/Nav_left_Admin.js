import React, { Component } from "react";
import SideBar from "./SideBar";
import logo from "../../Asset/h3.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav_left_Admin extends Component {
  render() {
    return (
      <div className="col-md-3 left_col">
        <div className="left_col scroll-view">
          <div className="navbar nav_title" style={{ border: 0 }}>
            <Link to="/admin/user" className="site_title">
              <img src={logo} style={{height: '98px'}} />
            </Link>
          </div>
          <div className="clearfix" />
          <hr style={{ marginTop: "0px" }} />
          <SideBar />
        </div>
      </div>
    );
  }
}

export default Nav_left_Admin;
