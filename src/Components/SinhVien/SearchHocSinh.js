import React, { Component } from "react";

class SearchHocSinh extends Component {
  render() {
    return (
      <div className="x_title">
        <h2>Danh sách học sinh </h2>
        <div className="col-sm-4" style={{ float: "right" }}>
          <form
            method="get"
            action="index.jsp"
            id="adminForm"
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
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Nhập vào đây để tìm kiếm"
                      />

                      <span className="input-group-addon">
                        <button type="submit">
                          <span className="glyphicon glyphicon-search" />
                        </button>
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

export default SearchHocSinh;
