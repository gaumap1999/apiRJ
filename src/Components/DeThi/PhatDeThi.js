import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../../action/action";
import ItemPhatDe from "./ItemPhatDe";
import {Redirect} from 'react-router-dom';

class PhatDeThi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenKyThi: "",
      status: false
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
     await this.props.getAPI.phatDeThi(data); 

     await this.props.getAPI.updateBaiLam(data);

     await this.props.getAPI.updateTrangThaiPhatDe(data);

    // console.log(data1)
    
    await alert("Phát đề thi thành công!");
    this.setState({
      status: !this.state.status
    })
    // console.log(this.props.phatDeThi)
  };
  componentWillMount() {
    this.props.getAPI.loadTenKyThi();
    // console.log(this.props.getKyThi);
  }
  render() {
    let data = {
      tenKyThi: this.state.tenKyThi,
    };
    if(this.state.status === true){
      return  <Redirect to='/quanlydethi/4'
             />
    }
    return (
      <div className="x_content">
        <p></p>
        <form name="user_frm" className="form-horizontal form-label-left">
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
                {this.props.loadTenKyThi.map((value, key) => {
                  return <ItemPhatDe key={key} data={value} />;
                })}
              </select>
            </div>
          </div>
          <div className="form-group text-center">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <button className="btn btn-round btn-primary btn-lg">
                Quay lại
              </button>
              <button
                className="btn btn-round btn-primary btn-lg"
                onClick={(e) => this.handleXacNhan(e, data)}
              >
                Phát đề
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
        loadTenKyThi: state.loadTenKyThi,
        phatDeThi: state.phatDeThi
    };
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getAPI: bindActionCreators(getAPI, dispatch),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(PhatDeThi);
