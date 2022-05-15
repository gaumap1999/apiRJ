import React, { Component } from "react";

class TieuDeDeThi extends Component {
  render() {
    return (
      <div className="x_title">
        <h2>
          Quản lý đề thi
        </h2>
        <div className="col-sm-5" style={{ float: "right" }}>
          <form
            method="get"
            className="form-horizontal form-label-left"
          >
            <div
              className="form-group pull-right"
              style={{ marginBottom: "0px" }}
            >
              <div className="input-group" style={{ marginBottom: "0px" }}>
                <div className="col-sm-12">
                    <div className="input-group stylish-input-group">
                      <span
                        className="input-group-addon"
                        style={{
                          background: "#bfc4c8"
                        }}
                      >
                        Đề thi
                      </span>
                      <select
                        name="chonDeThi"
                        className="form-control col-md-12 col-xs-12"
                      >
                        <option>--Chọn đề thi--</option>
                        <option>Tin Học</option>
                      </select>
                      <span className="input-group-addon">
                        <button type="submit">Tìm kiếm</button>
                      </span>
                    </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default TieuDeDeThi;
