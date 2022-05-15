import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../../action/action";

class ThemCauHoi extends Component {
  constructor(props) {
    super(props);
  this.state = {
    cauHoi: '',
    a:'',
    b:'',
    c:'',
    d:'',
    dapAnDung:'',
    boCauHoi:''
  }
  }
  handleXacNhan = (e, data) => {
    e.preventDefault();
    this.props.getAPI.themCauHoi(data)
     
  };
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
    console.log(value);
  };
  render() {
    let data = {
      cauHoi: this.state.cauHoi,
      a: this.state.a,
      b: this.state.b,
      c: this.state.c,
      d: this.state.d,
      dapAnDung: this.state.dapAnDung,
      boCauHoi: this.state.boCauHoi
   };
   if(this.props.themCauHoi === 'Them thanh cong!'){
     alert('Thêm thành công!')
   }
    return (
      <div className="x_content">
        <p></p>
        <form className="form-horizontal form-label-left">
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Câu hỏi:{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="textarea"
                name="cauHoi"
                required="required"
                className="form-control col-md-7 col-xs-12"
                onChange={(event) => this.handleChange(event)}
              /> 
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Đáp án A:{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="text"
                name="a"
                required="required"
                className="form-control col-md-7 col-xs-12"
                onChange={(event) => this.handleChange(event)}

              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Đáp án B:{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="text"
                name="b"
                required="required"
                className="form-control col-md-7 col-xs-12"
                onChange={(event) => this.handleChange(event)}

              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Đáp án C:{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                className="form-control col-md-7 col-xs-12"
                type="text"
                name="c"
                required="required"
                onChange={(event) => this.handleChange(event)}

              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Đáp án D:{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                className="form-control col-md-7 col-xs-12"
                type="text"
                name="d"
                required="required"
                onChange={(event) => this.handleChange(event)}

              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Đáp án đúng:{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                className="form-control col-md-7 col-xs-12"
                type="text"
                name="dapAnDung"
                onChange={(event) => this.handleChange(event)}

              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Bộ câu hỏi{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <select
                name="boCauHoi"
                className="form-control"
                onClick={(event) => this.handleChange(event)}
              >
                {this.props.data.map((value, key) => {
                  return <option value = {value.value}>{value.name}</option>
                })}
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
    themCauHoi: state.themCauHoi
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThemCauHoi);
