import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AddSinhVien extends Component {
  render() {
    return (
      <div className="x_content">
        <p></p>
        <Link to="/themmoisinhvienexcel">
          <button type="button" class="btn btn-success btn-md">
            Thêm học sinh từ file excel
          </button>
        </Link>
        <Link to="/danhsachhocsinh">
          <button type="button" class="btn btn-success btn-md">
            Danh sách học sinh
          </button>
        </Link>
        <form name="user_frm" className="form-horizontal form-label-left">
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Tên đăng nhập{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="text"
                name="username"
                className="form-control col-md-7 col-xs-12"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Mật khẩu <span style={{ color: "red" }}>*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="password"
                name="password"
                className="form-control col-md-7 col-xs-12"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Nhập lại mật khẩu <span style={{ color: "red" }}>*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="password"
                name="re_password"
                className="form-control col-md-7 col-xs-12"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Họ tên <span style={{ color: "red" }}>*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                className="form-control col-md-7 col-xs-12"
                type="text"
                name="fullname"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Mã Sinh Viên <span style={{ color: "red" }}>*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                className="form-control col-md-7 col-xs-12"
                type="text"
                name="masinhvien"
              />
            </div>
          </div>
          <div className="form-group text-center">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <button className="btn btn-round btn-primary btn-lg">
                Quay lại
              </button>
              <button className="btn btn-round btn-primary btn-lg">
                Xác nhận
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddSinhVien;
