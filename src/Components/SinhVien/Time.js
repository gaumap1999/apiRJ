import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../../action/action";
import {Redirect, Link} from 'react-router-dom';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      
    };
  }
  componentDidMount() {
    
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    console.log(this.state.minutes);
  }
  componentWillMount() {
    let data = {
      maKyThi: this.props.mathi,
      maNguoiDung: sessionStorage.getItem("manguoidung"),
    };
    console.log(data);
    this.props.getAPI.thoiGianThi(data);
    setTimeout(() => {
      sessionStorage.setItem("thoigian",this.props.thoiGianThi)
      // console.log(sessionStorage.getItem("thoigian"));
      this.setState({
        minutes: sessionStorage.getItem("thoigian")
      })
    }, 500); 
    
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  render() {
    console.log(this.state.minutes);
    sessionStorage.setItem("thoigian",this.state.minutes)
    // console.log( sessionStorage.getItem("thoigian"));

    setTimeout(() => {
      if(this.state.minutes === 0 && this.state.seconds === 0) {
          alert("Bạn đã hết giờ làm bài. Nộp bài ngay!");
      }
    }, 500); 
  
  
    if(this.state.minutes === -1) {
      // alert('Đã thi!')
      return <Redirect to='/hocsinh'
      />
    }
    const { minutes, seconds } = this.state;
    return (
      <span style={{ textAlign: "center" }}>
        {minutes === 0 && seconds === 0 ? (
          <h1>Hết giờ!</h1>
        ) : (
          <h1>
            Thời gian còn lại: {minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
      </span>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    getTopic: state.getTopic,
    thoiGianThi: state.thoiGianThi,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Time);
