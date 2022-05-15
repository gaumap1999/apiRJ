import React, { Component } from "react";
import ItemAdmin from "./ItemAdmin";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class TableAdmin extends Component {
  
  
  render() {
    return (
      <div className="x_content">
        <p></p>
        <div align="center">
          <font color="#FF0000" />
        </div>
        <p></p>
        <div
          id="datatable_wrapper"
          className="dataTables_wrapper form-inline dt-bootstrap no-footer"
        >
          <div className="row">
            <div className="col-sm-12">
              <div id="datatable_length">
                <Link to="/admin/adduser">
                  <button type="button" className="btn btn-success btn-md" >
                    Thêm tài khoản
                  </button>
                </Link>
                <p>
                  <i className="fa fa-level-up" /> Bạn có thể tạo thêm các tài
                  khoản giáo viên hoặc admin để quản lý các đợt thi.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <table
                  id="datatable"
                  className="table table-striped table-bordered dataTable no-footer"
                  role="grid"
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="sorting_asc"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "30px" }}
                      >
                        STT
                      </th>
                      <th
                        className="sorting"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "120px" }}
                      >
                        Tên đăng nhập
                      </th>
                      <th
                        className="sorting"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "130px" }}
                      >
                        Họ tên
                      </th>
                      <th
                        className="sorting"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "100px" }}
                      >
                        Email
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "87px" }}
                      >
                        Điện thoại
                      </th>
                      <th
                        className="sorting"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "87px" }}
                      >
                        Thời gian tạo
                      </th>
                      <th
                        className="sorting"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "87px" }}
                      >
                        Quyền
                      </th>
                      <th
                        className="sorting"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "87px" }}
                      >
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  {this.props.getDataAdmin.map((value, key) => {
                    return (
                      <ItemAdmin key={key} getDataAdmin={value} count={key} />
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default TableAdmin;
