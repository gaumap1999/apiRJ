import React, { Component } from "react";
import SearchHocSinh from "../Components/SinhVien/SearchHocSinh";
import TableHocSinh from "../Components/SinhVien/TableHocSinh";
import Footer from "../Components/Footer/Footer";
import Nav_left_Admin from "../Components/Nav_left/Nav_left_Admin";
import Top_nav from "../Components/Top_nav/Top_nav";
import ThongBao from "../Components/ThongBao/ThongBao";
import "./style1.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../action/action";

class PageDanhSachHocSinh extends Component {
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
  componentWillMount() {
    this.props.getAPI.getHocSinh()
  }
  render() {
    return (
      <div className={this.state.statusTopNav === false ? "nav-md" : "nav-sm"}>
        <div className="container body">
          <div className="main_container">
            <Nav_left_Admin />
            <ThongBao />
            <Top_nav handleClick={() => this.handleClick()} />
            <div className="right_col" role="main">
              <div className="col-md col-sm col-xs">
                <div className="x_panel">
                  <SearchHocSinh />
                  <TableHocSinh getHocSinh = {this.props.getHocSinh}/>
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
const mapStateToProps = (state, ownProps) => {
  return {
    getHocSinh: state.getHocSinh
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PageDanhSachHocSinh);
