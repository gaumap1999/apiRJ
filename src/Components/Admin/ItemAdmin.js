import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../../action/action";
class ItemAdmin extends Component {
  confirm = () =>{
    let xacNhan = window.confirm("Bạn có muốn xóa người này không?");
    this.props.getAPI.alertOn();
  }
  render() {
    return (
      <tbody>
        <tr role="row" className="even">
          <td>{this.props.count + 1}</td>
          <td>
            <b>{this.props.getDataAdmin.tenDangNhap}</b>
          </td>
          <td>{this.props.getDataAdmin.hoVaTen}</td>
          <td>{this.props.getDataAdmin.email}</td>
          <td>{this.props.getDataAdmin.soDienThoai}</td>
          <td>{this.props.getDataAdmin.thoiGianTao}</td>
          <td>Admin</td>
          <td>
            <a
              title="Click vào đây để đổi mật khẩu"
              onClick={() => this.changeStatus()}
            >
              <i
                className="fa fa-edit"
                data-toggle="modal"
              />
            </a>{" "}
            <a title="Click vào đây để sửa thông tin" href="">
              <span
                className="glyphicon glyphicon-edit"
                style={{ color: "green" }}
                aria-hidden="true"
              />
            </a>{" "}
            <a
              title="Click vào đây để xóa"
              href="# "
              onClick={()=>this.confirm()}
              value="OK"
            >
              <span
                className="glyphicon glyphicon-remove"
                style={{ color: "red" }}
                aria-hidden="true"
              />
            </a>
          </td>
        </tr>
      </tbody>
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
export default connect(mapStateToProps, mapDispatchToProps)(ItemAdmin);
