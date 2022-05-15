import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../../action/action";
import {Redirect, Link} from 'react-router-dom';
import update from "react-addons-update";

class OnTap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: [],
      status: false
    };
  }
  onValueChange(event,index, maCauHoiOnTap) {
    this.setState(
      update(this.state, {
        selectedOption: {
          [index]: {
            $set: event.target.value,
          },
        },
      }),
    );
    let data1 = {
      maNguoiDung: sessionStorage.getItem("manguoidung"),
      dapAnNguoiDung: event.target.value,
      maCauHoiOnTap : maCauHoiOnTap,
    }
    this.props.getAPI.nopBaiOnTap(data1);
  }
  
  render() {
    console.log(this.state.selectedOption);
    return (
      
          <div className="panel panel-default">
            <div className="panel-body">
              <p className="question">
                <strong className="text-red m-bottom">
                  Câu hỏi {this.props.count + 1} :
                </strong>{" "}
                {this.props.data.cauHoi}
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
                        this.onValueChange(e, this.props.count, this.props.data.maCauHoiOnTap);
                      }}
                    />{" "}
                    {this.props.data.a}{" "}
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
                        this.onValueChange(e, this.props.count, this.props.data.maCauHoiOnTap);
                      }}
                    />{" "}
                    {this.props.data.b}{" "}
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
                        this.onValueChange(e, this.props.count, this.props.data.maCauHoiOnTap);
                      }}

                    />{" "}
                    {this.props.data.c}{" "}
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
                        this.onValueChange(e, this.props.count, this.props.data.maCauHoiOnTap);
                      }}

                    />{" "}
                    {this.props.data.d}{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>
        
         
        
          
   
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(OnTap);
