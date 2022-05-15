import React, { Component } from "react";

class ItemCauHoi extends Component {
  render() {
    console.log(this.props.data.count);
    return (
      <tbody>
        <tr className="row1">
          <td align="center">{this.props.dem + 1}</td>
          <td align="left">
            <b>
              <a style={{ fontWeight: "bold", color: "orange" }} href="# ">
                {this.props.data.name}
              </a>
            </b>
          </td>
          <td align="center" style={{ fontWeight: "bold", fontSize: "13px" }}>
            {this.props.data.count}
          </td>

          <td align="left"> </td>
          <td align="center">11/04/2020 10:11 AM</td>
          <td align="center">nguyenvanhoc</td>
          <td align="center">
            <a title="Danh sách câu hỏi" href="# ">
              <span
                className="glyphicon glyphicon-th-list"
                style={{ color: "green" }}
              />
            </a>
            &nbsp;
            <a title="Click vào đây để sửa thông tin" href="# ">
              <span
                className="glyphicon glyphicon-edit"
                style={{ color: "green" }}
              />
            </a>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default ItemCauHoi;
