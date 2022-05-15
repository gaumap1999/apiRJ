import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="top_nav">
        <div className="nav_menu">
          <nav>
            <div className="comany-name" style={{ color: "#c71f35" }}>
                 Nguyễn Văn Học
            </div>
            <ul className="nav navbar navbar-right">
              <li>
                <a href="# "> Hướng dẫn </a>
              </li>
              <li>
                <a href="# "> Đăng Kí </a>
              </li>
              <li>
                <a href="# "> Liên Hệ </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
