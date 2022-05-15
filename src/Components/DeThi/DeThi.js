import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as getAPI from '../../action/action';
import ItemDeThi from "./ItemDeThi";
class DeThi extends Component {
  
  componentWillMount() {
    this.props.getAPI.loadDeThi();
  }
  
  render() {
    console.log(this.props.loadDeThi)
    return (
      <div className="x_content">
        <p></p>
        <Link to="/taodethi">
          <button type="button" class="btn btn-success btn-md">
            Tạo đề thi
          </button>
        </Link>
        <Link to="/phatdethi">
          <button type="button" class="btn btn-success btn-md">
            Phát đề thi
          </button>
        </Link>
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
                        Tên kỳ thi
                      </th>
                      <th
                        className="sorting"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "120px" }}
                      >
                        Số đề
                      </th>
                      <th
                        className="sorting"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "130px" }}
                      >
                        Tổng số câu
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
                  {this.props.loadDeThi.map((value, key) => {
                    return (
                      <ItemDeThi key={key} data={value} />
                    );
                  })}
                </table>
              </div>
            </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loadDeThi: state.loadDeThi
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DeThi);
