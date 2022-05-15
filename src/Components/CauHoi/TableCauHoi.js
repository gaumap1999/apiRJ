import React, { Component } from "react";
import ItemCauHoi from "./ItemCauHoi";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as getAPI from "../../action/action";
class TableCauHoi extends Component {
  componentWillMount() {
    this.props.getAPI.getBoCauHoi();
  }
  
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
              <div>
                <a href="# ">
                  <button type="button" className="btn btn-success btn-md">
                    Thêm mới kho lưu trữ câu hỏi
                  </button>
                </a>
                <Link to = "/themcauhoi">
                  <button type="button" className="btn btn-success btn-md">
                    Thêm mới câu hỏi
                  </button>
                </Link>
                <p>
                  <i className="fa fa-level-up" aria-hidden="true" /> Kho lưu trữ câu hỏi, như là bộ câu hỏi word, excel, powpoint!
                </p>
              </div>
            </div>
            <span
              className="notice"
              style={{
                background: "#bfc4c8",
                color: "black",
                textAlign: "center",
              }}
            />
            <div className="row">
              <div className="col-sm-12">
                <table
                  className="table table-striped table-bordered dataTable no-footer"
                  role="grid"
                  aria-describedby="datatable_info"
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
                        style={{ width: "200px" }}
                      >
                        Bộ câu hỏi
                      </th>
                      <th
                        className="sorting"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "60px" }}
                      >
                        Số câu hỏi
                      </th>
                     
                      <th
                        className="sorting"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "170px" }}
                      >
                        Mô tả
                      </th>
                      <th
                        className="sorting"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "110px" }}
                      >
                        Thời gian tạo
                      </th>
                      <th
                        className="sorting"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "110px" }}
                      >
                        Người tạo
                      </th>
                      <th
                        className="sorting"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "80px" }}
                      >
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  {this.props.boCauHoi.map((value, key) => {
                    return (
                      <ItemCauHoi key={key} data={value} dem = {key} />
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
const mapStateToProps = (state, ownProps) => {
  return {
    boCauHoi: state.boCauHoi,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableCauHoi);
