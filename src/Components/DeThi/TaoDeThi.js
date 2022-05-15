import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../../action/action";
import ItemKyThi from "./ItemKyThi";
import {Redirect} from 'react-router-dom';

class TaoDeThi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soDe: 0,
      soCauHoi: 0,
      word: 0,
      excel: 0,
      powpoint: 0,
      tenKyThi: "",
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
    console.log(value);
  };
  handleXacNhan = async (e, data) => {
    e.preventDefault();
    console.log(data);
    this.props.getAPI.taoDeThi(data);
    let data1 = {
      tenKyThi: data.tenKyThi,
    };
    this.props.getAPI.updateTrangThaiThi(data1);
  };
  componentWillMount() {
    this.props.getAPI.getKyThi();
    // console.log(this.props.getKyThi);
  }
  render() {
    let data = {
      soDe: this.state.soDe,
      soCauHoi: this.state.soCauHoi,
      word: this.state.word,
      excel: this.state.excel,
      powpoint: this.state.powpoint,
      tenKyThi: this.state.tenKyThi,
    };
    if(this.props.taoDeThi === "Tong so cau khong du"){
      alert("Tong so cau khong du")
    } else if(this.props.taoDeThi === "Tao de thi thanh cong!"){
      alert("Tạo đề thi thành công!")
      return <Redirect to="/quanlydethi/4" />
    }
    return (
      <div className="x_content">
        <p></p>
        <form name="user_frm" className="form-horizontal form-label-left">
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Tổng số đề{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="text"
                name="soDe"
                className="form-control col-md-7 col-xs-12"
                onChange={(event) => this.handleChange(event)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Tổng số câu hỏi<span style={{ color: "red" }}>*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="text"
                name="soCauHoi"
                className="form-control col-md-7 col-xs-12"
                onChange={(event) => this.handleChange(event)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Word <span style={{ color: "red" }}>*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                className="form-control col-md-7 col-xs-12"
                type="text"
                name="word"
                onChange={(event) => this.handleChange(event)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Excel <span style={{ color: "red" }}>*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                className="form-control col-md-7 col-xs-12"
                type="text"
                name="excel"
                onChange={(event) => this.handleChange(event)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Powpoint <span style={{ color: "red" }}>*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                className="form-control col-md-7 col-xs-12"
                type="text"
                name="powpoint"
                onChange={(event) => this.handleChange(event)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Kỳ thi{" "}
              <span style={{ color: "red" }} className="required">
                *
              </span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <select
                name="tenKyThi"
                className="form-control"
                onClick={(event) => this.handleChange(event)}
              >
                {this.props.getKyThi.map((value, key) => {
                  return <ItemKyThi key={key} data={value} />;
                })}
              </select>
            </div>
          </div>
          <div className="form-group text-center">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <Link to = "/quanlydethi/4">
                <button className="btn btn-round btn-primary btn-lg">
                  Quay lại
                </button>
              </Link>
              <button
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
    getKyThi: state.getKyThi,
    taoDeThi: state.taoDeThi
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaoDeThi);
