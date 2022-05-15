import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Li from "./Li";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as getAPI from '../../action/action';
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Tài khoản quản trị",
          index: 1,
          link: "/admin1/user/1",
          icon: "fa fa-user",
        },
        {
          name: "Quản lý học sinh",
          index: 2,
          link: "/sinhvien/2",
          icon: "fa fa-users",
        },
        {
          name: "Quản lý kỳ thi",
          index: 3,
          link: "/quanLyKiThi/3",
          icon: "fa fa-archive",
        },
        {
          name: "Quản lý đề thi",
          index: 4,
          link: "/quanlydethi/4",
          icon: "fa fa-tasks"
        }
        ,
        {
          name: "Kho lưu trữ câu hỏi",
          index: 5,
          link: "/khoLuuTru/5",
          icon: "fa fa-question-circle",
        },
        {
          name: "Thống kê",
          index: 6,
          link: "/thongke/6",
          icon: "fa fa-question-circle",
        }
      ],
    };
  }

  render() {
    return (
      <div
        id="sidebar-menu"
        className="main_menu_side hidden-print main_menu mobile-bottom-bar"
      >
        <div className="menu_section">
          <ul className="nav side-menu">
            {this.state.data.map((value, key) => {
              return(<Li key={key} data={value} status={this.props.status}/>)
            })}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
      status: state.status
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      getAPI: bindActionCreators(getAPI, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
