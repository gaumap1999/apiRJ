import React, { Component } from "react";
import Footer from "../Components/Footer/Footer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../action/action";
import { BrowserRouter as Router, Route,  Link } from "react-router-dom";
import HeaderThi from "../Components/Header/HeaderThi";
import { Redirect } from "react-router-dom";

class PageKetQua extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     status: false,
  //   };
  // }
  // handleXem = () => {
  //   this.setState({
  //     status: !this.state.status,
  //   });
  // };
  render() {
    console.log(this.props.chamDiem);
    // if (this.state.status === true) {
    //   return <Redirect to="/xemchitiet" />;
    // }
    return (
      <div className="container body">
        <HeaderThi />
        <div className="right_col" role="main">
          <div className="col-md col-sm col-xs">
            <div className="x_panel">
              <div className="row">
                <form
                  className="form-horizontal form-label-left"
                >
                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">
                      Kỳ thi:
                    </label>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <input
                        name="tenKyThi"
                        className="form-control col-md-7 col-xs-12"
                        onChange={(event) => this.isChange(event)}
                        readOnly
                        value={this.props.chamDiem.tenKyThi}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">
                      Tổng số câu hỏi:
                    </label>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <input
                        name="soCauHoi"
                        className="form-control col-md-7 col-xs-12"
                        onChange={(event) => this.isChange(event)}
                        value={this.props.chamDiem.tongSoCauHoi}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">
                      Điểm thi:
                    </label>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <input
                        name="diemThi"
                        className="form-control col-md-7 col-xs-12"
                        onChange={(event) => this.isChange(event)}
                        value={this.props.chamDiem.diem}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-md-3 col-sm-3 col-xs-12">
                      Xếp loại:
                    </label>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <input
                        name="xepLoai"
                        className="form-control col-md-7 col-xs-12"
                        onChange={(event) => this.isChange(event)}
                        value={this.props.chamDiem.xepLoai}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="ln_solid" />
                  <div className="form-group text-center">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <Link to='/hocsinh'>
                        <button className="btn btn-round btn-primary btn-lg">
                          Quay lại
                        </button>
                      </Link>
                      {/* <button
                        className="btn btn-round btn-primary btn-lg"
                        onClick={() => {
                          this.handleXem();
                        }}
                      >
                        Xem chi tiết
                      </button> */}
                    </div>
                  </div>
                </form>
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
    chamDiem: state.chamDiem,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PageKetQua);
