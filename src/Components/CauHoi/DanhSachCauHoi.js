import React, { Component } from "react";

class DanhSachCauHoi extends Component {
  render() {
    return (
      <div>
        <div className="x_title">
          <h2>
            Danh sách câu hỏi của kho lưu trữ:{" "}
            <span className="test365-title-form">hahalacki</span>
          </h2>
          <div className="col-sm-6" style={{ float: "right !important" }}>
            <form
              method="get"
              action="question.jsp"
              data-parsley-validate
              className="form-horizontal form-label-left"
              noValidate
            >
              <div
                className="form-group pull-right"
                style={{ marginBottom: "0px !important" }}
              >
                <div
                  className="input-group"
                  style={{ marginBottom: "0px !important" }}
                >
                  <div className="col-sm-12">
                    <div id="imaginary_container">
                      <div className="input-group stylish-input-group">
                        <span
                          className="input-group-addon"
                          style={{
                            background: "#bfc4c8 !important",
                            color: "black !important",
                          }}
                        >
                          Ngân hàng câu hỏi
                        </span>
                        <input
                          type="hidden"
                          defaultValue={13935}
                          id="categoty"
                          name="category"
                        />
                        <select
                          className="form-control col-md-12 col-xs-12"
                          id="id"
                          name="id"
                        >
                          <option value={22753}>User name</option>
                          <option value={22748}>CLB NHỮNG NHÀ GIÁO TRẺ</option>
                          <option value={22754}>User name</option>
                          <option value={22755} selected="selected">
                            hahalacki
                          </option>
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
        <div className="back">
          <button
            type="button"
            style={{
              backgroundColor: "#bfc4c8 !important",
              borderColor: "#bfc4c8  !important",
            }}
            className="btn btn-danger btn-xs"
            onclick="window.location.href='bank_list.jsp';"
          >
            &lt;&lt; Quay lại
          </button>
        </div>
      </div>
    );
  }
}

export default DanhSachCauHoi;
