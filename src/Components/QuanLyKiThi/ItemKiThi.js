import React, { Component } from "react";

class ItemKiThi extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <td align="center">{this.props.count + 1}</td>
          <td>
            <a style={{ fontWeight: "bold", color: "orange" }} href="# ">
              {this.props.data.tenKyThi}
            </a>
          </td>

          <td align="center">{this.props.data.thoiGianThi}</td>
          <td align="center">
            <a title="Click vào đây để sửa thông tin" href="# ">
              <span
                className="glyphicon glyphicon-edit"
                style={{ color: "green" }}
              />
            </a>{" "}
            <a title="Click vào đây để xóa" href="# ">
              <span
                className="glyphicon glyphicon-remove "
                style={{ color: "red" }}
              />
            </a>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default ItemKiThi;
