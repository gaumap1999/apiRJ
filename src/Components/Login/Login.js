import React, { Component } from "react";
import './style.css';
import {Redirect, Link} from 'react-router-dom';

class Login extends Component {
  
  handleClickLogin = (e)=>{
    e.preventDefault();
    this.props.xacNhan.token({
      tenDangNhap: this.state.tenDangNhap,
      matKhau: this.state.matKhau
    }, this.props.token );
    if(this.props.data === 'Sai mat khau!'){
      alert('Sai mat khau!')
  }else if(this.props.data === 'Sai tai khoan!'){
      alert('Sai tai khoan!')
  }

  }
  isChange = (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]:value
      });
  }
  render() {
    sessionStorage.setItem("token", this.props.token);
    sessionStorage.setItem("manguoidung", this.props.maNguoiDung);
    if(sessionStorage.getItem('token').length > 9 &&  this.props.vaiTro === 3 ){
     return  <Redirect to='/hocsinh'
             />
    }
    else if(sessionStorage.getItem('token').length > 9 &&  this.props.vaiTro === 1 ) {
      return  <Redirect to='/admin/user'
             />
    }
    else if(sessionStorage.getItem('token').length > 9 &&  this.props.vaiTro === 2 ) {
      return  <Redirect to='/giaovien'
             />
    }
    return (
      <div className="loginbox">
        <h1 style={{textAlign: 'center'}}>ĐĂNG NHẬP</h1>
        <form
          name="user_frm"
          className="form-horizontal form-label-left"
        >
          <div className="form-group">
            <label
              className="control-label col-md-3 col-sm-3 col-xs-12"
            >
              Tên đăng nhập{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="text"
                name="tenDangNhap"
                className="form-control col-md-7 col-xs-12"
                onChange = {(event)=>this.isChange(event)}
              />
            </div>
          </div>
          <div className="form-group">
            <label
              className="control-label col-md-3 col-sm-3 col-xs-12"
            >
              Mật khẩu{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="password"
                name="matKhau"
                autoComplete = "current_passowrd"
                className="form-control col-md-7 col-xs-12"
                onChange = {(event)=>this.isChange(event)}
              />
            </div>
          </div>
          <div className="form-group">
            <a
              className="control-label col-md-5"
            >
              Bạn quên mật khẩu hãy nhấn vào đây!.
            </a>
          </div>
          <div className="ln_solid" />
          <div className="form-group text-center">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <button
                onClick = {(e)=>this.handleClickLogin(e)}
                className="btn btn-round btn-primary btn-lg"
                type="submit"
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
