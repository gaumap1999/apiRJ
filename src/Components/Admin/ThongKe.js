import React, { Component } from "react";

class ThongKe extends Component {
  render() {
    return (
      <div style={{ marginLeft: "10px" }}>
        <div className="col">
          <h4>
            Mã người dùng: {this.props.data.maNguoiDung}
          </h4>
        </div>
        <div className="col">
          <h6>Tên kỳ thi: {this.props.data.tenKyThi}</h6>
        </div>
        <div className="col">
          <h6>Điểm: {this.props.data.diem}</h6>
        </div>
        <div className="col">
          <h6>Xếp Loại: {this.props.data.xepLoai}</h6>
        </div>
        <hr style={{ borderTop: "3px double" }} />
      </div>
    );
  }
}

export default ThongKe;
