import React, { Component } from "react";
import update from "react-addons-update";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../../action/action";
import {Redirect, Link} from 'react-router-dom';

class Nhap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
      status: false
    };
  }
  onValueChange(event, index,maCauHoi) {
    this.setState(
      update(this.state, {
        selectedOption: {
          [index]: {
            $set: event.target.value,
          },
        },
      }),
    );
    console.log(this.props.mathi)
    let dataNop = {
      maNguoiDung: sessionStorage.getItem("manguoidung"),
      dapAnNguoiDung: event.target.value,
      maCauHoi : maCauHoi,
      maKyThi: this.props.mathi,
    }
    this.props.getAPI.nopBaiThi(dataNop);

    let dataThi = {
      maKyThi: this.props.mathi,
      maNguoiDung: sessionStorage.getItem("manguoidung"),
      thoiGianCon: sessionStorage.getItem("thoigian") 
    }
    this.props.getAPI.updateThoiGian(dataThi);
  }
  handleNopBai = (e)=>{
    e.preventDefault();
    let xacNhan = window.confirm("Bạn có muốn nộp bài không?");
    console.log(xacNhan);
    if(xacNhan === true){
      let dataChamDiem = {
        maNguoiDung: sessionStorage.getItem("manguoidung"),
        maKyThi: this.props.mathi,
        tenKyThi: sessionStorage.getItem("tenkythi")
      }
      this.props.getAPI.chamDiem(dataChamDiem);
      this.setState({
        status: !this.state.status
      })
    }
  }
  render() {
    console.log(this.state.selectedOption);
    console.log(this.props.chamDiem);
    if(this.state.status === true){
      return  <Redirect to='/ketqua'
             />
    }
    return (
      <div className="col-8">
        <form method="post">
          <div className="panel panel-default">
            <div className="panel-body">
              <p className="question">
                <strong className="text-red m-bottom">
                  Câu hỏi {this.props.count} :
                </strong>{" "}
                {this.props.obj.cauhoi}
              </p>
              <div className="flex">
                <div className="col">
                  <label>
                    {" "}
                    <input
                      className="radio_answer_1"
                      type="radio"
                      value="A"
                      checked={
                        this.state.selectedOption[this.props.count] === "A"
                      }
                      onChange={(e) => {
                        this.onValueChange(e, this.props.count, this.props.obj.mach);
                      }}
                    />{" "}
                    {this.props.obj.A}{" "}
                  </label>
                </div>
                <div className="col">
                  <label>
                    {" "}
                    <input
                      className="radio_answer_2"
                      type="radio"
                      value="B"
                      checked={
                        this.state.selectedOption[this.props.count] === "B"
                      }
                      onChange={(e) => {
                        this.onValueChange(e, this.props.count, this.props.obj.mach);
                      }}
                    />{" "}
                    {this.props.obj.B}{" "}
                  </label>
                </div>                        

                <div className="col">
                  <label>
                    {" "}
                    <input
                      className="radio_answer_3"
                      type="radio"
                      value="C"
                      checked={
                        this.state.selectedOption[this.props.count] === "C"
                      }
                      onChange={(e) => {
                        this.onValueChange(e, this.props.count, this.props.obj.mach);
                      }}
                    />{" "}
                    {this.props.obj.C}{" "}
                  </label>
                </div>
                <div className="col">
                  <label>
                    {" "}
                    <input
                      className="radio_answer_4"
                      type="radio"
                      value="D"
                      checked={
                        this.state.selectedOption[this.props.count] === "D"
                      }
                      onChange={(e) => {
                        this.onValueChange(e, this.props.count, this.props.obj.mach);
                      }}
                    />{" "}
                    {this.props.obj.D}{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>
        
          <button className="btn btn-danger" onClick = {(e)=>this.handleNopBai(e)}>
            <span>Nộp Bài </span>
          </button>
        
          
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    chamDiem:state.chamDiem
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Nhap);
