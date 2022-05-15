import React, { Component } from "react";
import Footer from "../Components/Footer/Footer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../action/action";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Top_nav from "../Components/Top_nav/Top_nav";
import ThongKe from "../Components/Admin/ThongKe";

class ThongKeAdmin extends Component {
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
    this.props.getAPI.thongKe();
  }

  render() {
    return (
      <div className="container body">
        <Top_nav handleClick={() => this.handleClick()} />
        <div className="right_col" role="main">
          <div className="col-md col-sm col-xs">
            <div className="x_panel">
              <div className="row">
                {this.props.thongKe.map((value, key) => {
                  return <ThongKe key={key} data={value} count={key} />;
                })}
                <div className="form-group text-center">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <Link to="/admin/user">
                      <button className="btn btn-round btn-primary btn-lg">
                        Quay lại
                      </button>
                    </Link>
                  </div>
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
    thongKe: state.thongKe,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongKeAdmin);
