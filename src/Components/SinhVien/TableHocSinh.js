import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ItemHocSinh from '../SinhVien/ItemHocSinh';
class TableHocSinh extends Component {

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
                        Lớp
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
                  {this.props.getHocSinh.map((value, key) => {
                    return (
                      <ItemHocSinh key={key} getHocSinh={value} count={key} />
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

export default TableHocSinh;
