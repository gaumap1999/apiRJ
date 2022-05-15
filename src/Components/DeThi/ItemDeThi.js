import React, { Component } from "react";

class ItemDeThi extends Component {
  confirm = () =>{
    let xacNhan = window.confirm("Bạn có muốn xóa người này không?");
    this.props.getAPI.alertOn();
  }
  render() {
    return (
      <tbody>
        <tr role="row" className="even">
          <td>{this.props.data.stt + 1 }</td>
          <td>{this.props.data.tenkythi}</td>
          <td>{this.props.data.sode}</td>
          <td>{this.props.data.tongsocau}</td>
          <td>
            <a
              title="Click vào đây để đổi mật khẩu"
              onClick={() => this.changeStatus()}
            >
              <i
                className="fa fa-edit"
                data-toggle="modal"
                data-target="#exampleModalCenter"
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
export default ItemDeThi;
