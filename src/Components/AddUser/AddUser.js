import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const formValid = formErrors => {
  let valid = true;
  Object.values(formErrors).forEach( val => {
    val.length > 0 && (valid = false)
  });
  return valid;
}

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tenDangNhap :"",
        matKhau : "",
        nhapLaiMatKhau : "",
        hoVaTen : "",
        email : "",
        soDienThoai : "",
        maVaiTro: "1",
        formErrors : {
           tenDangNhap: "",
           matKhau: "",
           hoVaTen: "",
           email: "",
           soDienThoai: "",
           nhapLaiMatKhau: ""
       }
    }
  }
  
 
  handleSubmit = e => {
    e.preventDefault();
    if(formValid(this.state.formErrors)){
      console.log(`
        --SUBMITTING--
        Ho va Ten: ${this.state.hoVaTen}
      `)
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE!")
    }
  }
  // componentDidMount() {
  //   console.log(this.props.addDataAdmin)
  // }
  
  handleChange = e =>{
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;
    switch (name) {
      case 'tenDangNhap':
          formErrors.tenDangNhap = value.length < 3 && value.length > 0
          ? 'minimum 3 characaters required'
          : '';
          break;
      case 'matKhau':
          formErrors.matKhau = value.length < 6 && value.length > 0 
          ? 'minimum 6 characaters required'
          : '';
          break;
      case 'nhapLaiMatKhau':
          formErrors.nhapLaiMatKhau = value !== this.state.matKhau
          ? 'mat khau khong trung khop'
          : '';
          break;
      case 'hoVaTen':
          formErrors.hoVaTen = value.length < 3 && value.length > 0 
          ? 'minimum 3 characaters required'
          : '';
          break;
      case 'email':
          formErrors.email = 
          emailRegex.test(value) && value.length > 0 
          ? ''
          : 'invalid email address';
          break;    
      case 'soDienThoai':
          formErrors.soDienThoai = value.length < 3 && value.length > 0 
          ? 'minimum 3 characaters required'
          : '';
          break;       
      default:
        break; 
    }
    this.setState({
      formErrors,
      [name]: value
    },() => console.log(this.state))
  }
  handleAddAdmin = (e,data) =>{
    e.preventDefault();
    this.props.getAPI.addDataAdmin(data);
  }
  render() {
    const { formErrors } = this.state;
    let data =  {
        tenDangNhap: this.state.tenDangNhap,
        matKhau: this.state.matKhau,
        email: this.state.email,
        hoVaTen: this.state.hoVaTen,
        soDienThoai: this.state.soDienThoai,
        maVaiTro: this.state.maVaiTro
    }
    console.log(this.props.addDataAdmin)
    return (
      <div className="x_content">
      {this.props.addDataAdmin === "Thêm thành công!" ? alert("Thêm thành công!") :""}
        <p></p>
        <form onSubmit={this.handleSubmit} className="form-horizontal form-label-left">
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
                name="tenDangNhap"
                required="required"
                className="form-control col-md-7 col-xs-12"
                onChange = {this.handleChange}
              />
              {formErrors.tenDangNhap.length > 0 && (
                <span style={{color: "red"}}> {formErrors.tenDangNhap} </span>
              )}
              {this.props.addDataAdmin === "Ten dang nhap da co!" ? <span style={{color: "red"}}>Tên đăng nhập đã có!</span>:""}
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Mật khẩu{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="password"
                name="matKhau"
                autoComplete = "new_passowrd"
                required="required"
                className="form-control col-md-7 col-xs-12"
                onChange = {this.handleChange}
              />
              {formErrors.matKhau.length > 0 && (
                <span style={{color: "red"}}> {formErrors.matKhau} </span>
              )}
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Nhập lại mật khẩu{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="password"
                name="nhapLaiMatKhau"
                autoComplete = "re_password"
                required="required"
                className="form-control col-md-7 col-xs-12"
                onChange = {this.handleChange}
              />
              {formErrors.nhapLaiMatKhau.length > 0 && (
                <span style={{color: "red"}}> {formErrors.nhapLaiMatKhau} </span>
              )}
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Họ tên{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                className="form-control col-md-7 col-xs-12"
                type="text"
                name="hoVaTen"
                required="required"
                onChange = {this.handleChange}
              />
              {formErrors.hoVaTen.length > 0 && (
                <span style={{color: "red"}}> {formErrors.hoVaTen} </span>
              )}
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Email{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                className="form-control col-md-7 col-xs-12"
                type="text"
                name="email"
                required="required"
                onChange = {this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span style={{color: "red"}}> {formErrors.email} </span>
              )}
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Điện thoại{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                className="form-control col-md-7 col-xs-12"
                type="text"
                name="soDienThoai"
                onChange = {this.handleChange}
              />
              {formErrors.soDienThoai.length > 0 && (
                <span style={{color: "red"}}> {formErrors.soDienThoai} </span>
              )}
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Phân quyền{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <select name="maVaiTro" className="form-control" id="group" onChange = {this.handleChange}>
                <option value="1">Admin</option>
                <option value="3">Giáo viên</option>
              </select>
            </div>
          </div>
          <div className="form-group text-center">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <Link to="/admin/user/1">
                <button
                  type="button"
                  className="btn btn-round btn-primary btn-lg"
                >
                  Quay lại
                </button>
              </Link>
              <button
                type="submit"
                className="btn btn-round btn-primary btn-lg"
                onClick = {(e)=>this.handleAddAdmin(e,data)}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddUser;
