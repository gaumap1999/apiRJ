import React, { Component } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../action/action";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DanhSachKyThi from "../Components/QuanLyKiThi/DanhSachKyThi";
import HeaderThi from "../Components/Header/HeaderThi";

class PageSinhVien extends Component {
  componentWillMount() {
    this.props.getAPI.loadKyThi();
  }
  render() {
    console.log(this.props.getKyThi);
    return (
      <div className="container body">
        <HeaderThi />
        <div className="right_col" role="main">
          <div className="col-md col-sm col-xs">
            <div className="x_panel">
              <div className="row">
                {this.props.loadKyThi.map((value, key) => {
                  return (
                    <DanhSachKyThi key={key} data={value}/>
                  );
                })}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loadKyThi: state.loadKyThi,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PageSinhVien);
