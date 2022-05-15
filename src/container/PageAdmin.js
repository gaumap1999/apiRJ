import React, { Component } from "react";
import SearchAdmin from "../Components/Admin/SearchAdmin";
import TableAdmin from "../Components/Admin/TableAdmin";
import Footer from "../Components/Footer/Footer";
import Nav_left_Admin from "../Components/Nav_left/Nav_left_Admin";
import Top_nav from "../Components/Top_nav/Top_nav";
import ThongBao from "../Components/ThongBao/ThongBao";
import "./style1.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../action/action";

class PageAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusTopNav: false,
    };
  }
  handleClick = () => {
    this.setState({
      statusTopNav: !this.state.statusTopNav,
    });
  };
  componentWillMount() {
    this.props.getAPI.getDataAdmin(
      {Authorization: "Bearer " + sessionStorage.getItem("token"),}
    );
    this.props.getAPI.getStatusNav(this.props.match.params.id);
  }
  render() {
    console.log("Hoc" + sessionStorage.getItem("token"));
    return (
      <div className={this.state.statusTopNav === false ? "nav-md" : "nav-sm"}>
        <div className="container body">
          <div className="main_container">
            <Nav_left_Admin />
            <ThongBao />
            <Top_nav handleClick={() => this.handleClick()} />
            <div className="right_col" role="main">
              <div className="col-md col-sm col-xs">
                <div className="x_panel">
                  <SearchAdmin />
                  <TableAdmin getDataAdmin={this.props.getDataAdmin} />
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    getDataAdmin: state.getDataAdmin,
    status: state.status,
    token: state.token,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PageAdmin);
