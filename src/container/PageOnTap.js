import React, { Component } from "react";
import Footer from "../Components/Footer/Footer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../action/action";
import HeaderThi from "../Components/Header/HeaderThi";
import OnTap from "../Components/SinhVien/OnTap";
import TimeOnTap from "../Components/SinhVien/TimeOnTap";
import {Redirect, Link} from 'react-router-dom';

class PageOnTap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    }
  }
  
  componentWillMount() {
    let data = {
      maNguoiDung: sessionStorage.getItem("manguoidung")
    }
    this.props.getAPI.onTap(data)
    console.log(data)
  }
  handleNopBai = (e)=>{
    e.preventDefault();
    let xacNhan = window.confirm("Bạn có muốn nộp bài không?");
    if(xacNhan === true){
      let dataChamDiem = {
        maNguoiDung: sessionStorage.getItem("manguoidung")
      }
      this.props.getAPI.chamDiemOnTap(dataChamDiem);
      this.setState({
        status: !this.state.status
      })
    }
  }
  render() {
    if(this.state.status === true){
      return  <Redirect to='/ketquaontap'
             />
    }
    return (
      <div className="container body">
        <HeaderThi />
        <div className="right_col" role="main">
          <div className="col-md col-sm col-xs">
            <div className="x_panel">
              <div className="row">
                <TimeOnTap />
                <div className="col-8">
                  <form method="post">
                    
                    {this.props.onTap.map((value,key)=>{
                      return <OnTap data={value} key={key} count={key}/>
                    })}
                  <button
                    className="btn btn-danger"
                    onClick={(e) => this.handleNopBai(e)}
                  >
                    <span>Nộp Bài </span>
                  </button>
                  </form>
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
    onTap: state.onTap
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PageOnTap);
