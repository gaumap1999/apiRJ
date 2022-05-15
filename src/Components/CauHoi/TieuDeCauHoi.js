import React, { Component } from "react";

class TieuDeCauHoi extends Component {
  render() {
    return (
      <div className="x_title">
        <h2>
          Danh sách tất cả kho lưu trữ câu hỏi
        </h2>
        <div className="col-sm-5" style={{ float: "right" }}>
          <form
            method="get"
            name="adminForm"
            className="form-horizontal form-label-left"
          >
            <div
              className="form-group pull-right"
              style={{ marginBottom: "0px" }}
            >
              <div className="input-group" style={{ marginBottom: "0px" }}>
                <div className="col-sm-12">
                  <div id="imaginary_container">
                    <div className="input-group stylish-input-group">
                      <span
                        className="input-group-addon"
                        style={{
                          background: "#bfc4c8"
                        }}
                      >
                        Kì thi
                      </span>
                      <select
                        id="slCategoryUser"
                        name="slCategoryUser"
                        className="form-control col-md-12 col-xs-12"
                      >
                        <option>--Chọn kì thi--</option>
                        <option>Tin Học</option>
                      </select>
                      <span className="input-group-addon">
                        <button type="submit">Tìm kiếm</button>
                      </span>
                    </div>
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

export default TieuDeCauHoi;
