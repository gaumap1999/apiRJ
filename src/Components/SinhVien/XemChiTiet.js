import React, { Component } from "react";

class XemChiTiet extends Component {
  render() {
    return (
      <div style={{ marginLeft: "10px" }}>
        <div className="col">
          <h4>
            Câu {this.props.count + 1}: {this.props.data.cauHoi}
          </h4>
        </div>
        <div className="col">
          <h6>A: {this.props.data.a}</h6>
        </div>
        <div className="col">
          <h6>B: {this.props.data.b}</h6>
        </div>
        <div className="col">
          <h6>C: {this.props.data.c}</h6>
        </div>
        <div className="col">
          <h6>D: {this.props.data.d}</h6>
        </div>
        <hr style={{ marginTop: "10px" }} />
        <div className="col">Đáp án đúng: {this.props.data.dapAnDung}</div>
        <div className="col">
          Đáp án đã chọn: {this.props.data.dapAnNguoiDung}
        </div>
        <hr style={{ borderTop: "3px double" }} />
      </div>
    );
  }
}

export default XemChiTiet;
