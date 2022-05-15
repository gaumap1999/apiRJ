import React, { Component } from "react";

class NoiDungCauHoi extends Component {
  render() {
    return (
      <div className="x_content">
        <p></p>
        <div align="center" id="note">
          <font color="#FF0000" />
        </div>
        <p></p>
        <div
          id="datatable_wrapper"
          className="dataTables_wrapper form-inline dt-bootstrap no-footer"
        >
          <div className="row">
            <div className="col-sm-12">
              <div className id="datatable_length">
                <a href="create_question.jsp?category=13935&id=22755">
                  <button type="button" className="btn btn-success btn-sm">
                    Thêm từng câu hỏi
                  </button>
                </a>
                <a href="edit_bank_add_from_excel.jsp?category=13935&id=22755">
                  <button type="button" className="btn btn-success btn-sm">
                    Thêm nhiều câu hỏi từ excel
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="row" style={{ height: "550px", margin: "0 auto" }}>
            <div className="col-sm-12">
              <form
                method="post"
                action="del_questions.jsp?category=13935"
                id="formdelete"
              >
                <table
                  id="datatable"
                  className="table table-striped table-bordered dataTable no-footer"
                  role="grid"
                  aria-describedby="datatable_info"
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="sorting_asc"
                        tabIndex={0}
                        aria-controls="datatable"
                        rowSpan={1}
                        colSpan={1}
                        aria-sort="ascending"
                        aria-label="Name: activate to sort column descending"
                        style={{ width: "70px" }}
                      >
                        <input
                          type="checkbox"
                          id="checkAllcb"
                          className="flat"
                          defaultValue={0}
                        />
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="datatable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Position: activate to sort column ascending"
                        style={{ width: "180px" }}
                      >
                        Nội dung
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="datatable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Office: activate to sort column ascending"
                        style={{ width: "100px" }}
                      >
                        Thể loại
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="datatable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Age: activate to sort column ascending"
                        style={{ width: "80px" }}
                      >
                        Trạng thái
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="datatable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Start date: activate to sort column ascending"
                        style={{ width: "100px" }}
                      >
                        Thời gian tạo
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="datatable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Salary: activate to sort column ascending"
                        style={{ width: "87px" }}
                      >
                        Người thao tác cuối
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="datatable"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Salary: activate to sort column ascending"
                        style={{ width: "87px" }}
                      >
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={7} align="left">
                        <input type="hidden" name="id" defaultValue={22755} />
                        <button
                          type="submit"
                          className="btn btn-warning btn-xs"
                        >
                          Xóa các câu hỏi đã chọn
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="back">
                  <button
                    type="button"
                    style={{
                      backgroundColor: "#bfc4c8",
                      borderColor: "#bfc4c8",
                    }}
                    className="btn btn-danger btn-xs"
                  >
                    &lt;&lt; Quay lại
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoiDungCauHoi;
