import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../../action/action";
import {Redirect, Link} from 'react-router-dom';

class ThemTenKiThi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenKyThi: '',
      thoiGianThi:0
    }
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleXacNhan = (e, data) => {
    e.preventDefault();
    this.props.getAPI.themKyThi(data)
  };
  render() {
    let data = {
      tenKyThi: this.state.tenKyThi,
      thoiGianThi: this.state.thoiGianThi
   };
   console.log(this.props.themKyThi)
   if(this.props.themKyThi === 'Them thanh cong!'){
     alert('Thêm thành công');
     return <Redirect to="/quanlydethi/4" />
   }
   else if(this.props.themKyThi === 'Ten ky thi da co!') {
    alert('Kỳ thi đã có!') 

   }
    return (
      <div className="x_content">
        <p></p>
        <div align="center" id="note">
          <font color="#FF0000" />
        </div>
        <p></p>
        <form
          method="post"
          className="form-horizontal form-label-left"
        >
          <div className="form-group">
            <label
              className="control-label col-md-3 col-sm-3 col-xs-12"
            >
              Tên kì thi{" "}
              <span style={{ color: "red !important" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="text"
                name="tenKyThi"
                className="form-control col-md-7 col-xs-12"
                onChange={(event) => this.handleChange(event)}
              />
            </div>
          </div>
          <div className="form-group">
            <label
              className="control-label col-md-3 col-sm-3 col-xs-12"
            >
              Thời gian thi (phút):
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type= 'text'
                className="form-control col-md-7 col-xs-12"
                name="thoiGianThi"
                onChange={(event) => this.handleChange(event)}
              />
            </div>
          </div>
          <div className="ln_solid" />
          <div className="form-group text-center">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <button
                type="button"
                className="btn btn-round btn-primary btn-lg"
              >
                Quay lại
              </button>
              <button
                type="submit"
                className="btn btn-round btn-primary btn-lg btnSubmit"
                onClick={(e) => this.handleXacNhan(e, data)}
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

const mapStateToProps = (state, ownProps) => {
  return {
    themKyThi: state.themKyThi,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThemTenKiThi);

