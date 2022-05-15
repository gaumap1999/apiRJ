import React, { Component } from "react";
import AddSinhVienExcel from "../Components/AddUser/AddSinhVienExcel";
import Nav_left_Admin from "../Components/Nav_left/Nav_left_Admin";
import Top_nav from "../Components/Top_nav/Top_nav";
import Footer from "../Components/Footer/Footer";

class PageAddExel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusTopNav: false,
    };
  }
  handleClick = () => {
    this.setState({
      statusTopNav: !this.state.statusTopNav,
    });
  };
  render() {
    return (
      <div className={this.state.statusTopNav === false ? "nav-md" : "nav-sm"}>
        <div className="container body">
          <div className="main_container">
            <Nav_left_Admin />
            <Top_nav handleClick={() => this.handleClick()} />
            <div className="right_col" role="main">
              <div className="col-md col-sm col-xs">
                <div className="x_panel">
                  <div className="x_title">
                    <h2>Thêm mới tài khoản sinh viên</h2>
                    <div className="clearfix" />
                  </div>
                  <AddSinhVienExcel />
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageAddExel;
