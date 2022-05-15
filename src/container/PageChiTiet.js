import React, { Component } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../action/action";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderThi from "../Components/Header/HeaderThi";
import XemChiTiet from "../Components/SinhVien/XemChiTiet";

class PageChiTiet extends Component {
  componentWillMount(e) {
    let data = {
      maNguoiDung: sessionStorage.getItem("manguoidung"),
      maKyThi: this.props.getTopic.maKyThi,
    };
    console.log(this.props.getTopic.maKyThi);

    this.props.getAPI.xemChiTiet(data);
  }

  render() {
    return (
      <div className="container body">
        <HeaderThi />
        <div className="right_col" role="main">
          <div className="col-md col-sm col-xs">
            <div className="x_panel">
              <div className="row">
                <h2 align="center">{sessionStorage.getItem("tenkythi")}</h2>
                {this.props.xemChiTiet.map((value, key) => {
                  return <XemChiTiet key={key} data={value} count={key} />;
                })}
                <div className="form-group text-center">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <Link to="/hocsinh">
                      <button className="btn btn-round btn-primary btn-lg">
                        Quay lại
                      </button>
                    </Link>
                  </div>
                </div>
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
    xemChiTiet: state.xemChiTiet,
    getTopic: state.getTopic,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PageChiTiet);
