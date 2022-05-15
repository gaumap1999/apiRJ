import React, { Component } from "react";
import { Alert, AlertContainer } from "react-bs-notifier";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../../action/action";
class ThongBao extends Component {
  render() {
    if(this.props.isDelete === false) return null;
    return (
      <div>
        <AlertContainer>
          <Alert type="info">Hello, world</Alert>
          {/* <Alert type="success">Oh, hai</Alert> */}
        </AlertContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isDelete: state.isDelete,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThongBao);
