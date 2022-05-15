import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../../action/action";

class HeaderThi extends Component {
  logOutClick = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("manguoidung");
    sessionStorage.removeItem("thoigian");
    sessionStorage.removeItem('tenkythi');
  };
  componentWillMount() {
    let data = {
      maNguoiDung: sessionStorage.getItem('manguoidung')
    }
    this.props.getAPI.thongTinTopNav(data)
  }
  render() {
    return (
      <div className="top_nav">
        <div className="nav_menu">
          <nav>
            <div className="comany-name" style={{ color: "#c71f35" }}>
            {this.props.thongTinTopNav.hoVaTen}
            </div>
            <ul className="nav navbar navbar-right">
              <li>
                <a
                  href="# "
                  className="user-profile dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                 {this.props.thongTinTopNav.tenDangNhap}
                  <span className=" fa fa-angle-down" />
                </a>
                <ul className="dropdown-menu dropdown-usermenu pull-right">
                  <li>
                  <Link to = '/ontap'> Ôn tập</Link>
                  </li>
                  <li>
                    <Link to = '/xemchitiet'> Xem kết quả </Link>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fa fa-pencil-square-o pull-right" /> Cập
                      nhật thông tin
                    </a>
                  </li>
                  <li>
                    <a href="# ">
                      <i className="fa fa-key pull-right" /> Đổi mật khẩu
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://localhost:3000/"
                      onClick={() => this.logOutClick()}
                    >
                      <i className="fa fa-sign-out pull-right" /> Thoát
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
      thongTinTopNav: state.thongTinTopNav
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      getAPI: bindActionCreators(getAPI, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderThi)
