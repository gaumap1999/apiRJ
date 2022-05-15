import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../../action/action";
import {Redirect, Link} from 'react-router-dom';

class TimeOnTap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 30,
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
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  render() {
    console.log(this.state.minutes);
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
export default connect(mapStateToProps, mapDispatchToProps)(TimeOnTap);
