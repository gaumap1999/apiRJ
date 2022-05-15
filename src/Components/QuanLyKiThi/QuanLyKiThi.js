import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ItemKiThi from "./ItemKiThi";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as getAPI from '../../action/action';

class QuanLyKiThi extends Component {
  componentWillMount() {
    this.props.getAPI.quanLyKyThi()
  }
  
  render() {
    return (
      <div className="x_content">
        <p></p>
        <div
          className="dataTables_wrapper form-inline dt-bootstrap no-footer"
        >
          <div className="row">
            <div className="col-sm-12">
              <div className id="datatable_length">
                <Link to="/tenKiThi">
                  <button type="button" className="btn btn-success btn-md">
                    Thêm mới kì thi
                  </button>
                </Link>
                <p>
                  <i className="fa fa-level-up" />
                  Kiểm tra 15p, 1 tiết, thi học kì(HK1, HK2)
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
                        align="center"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "60px" }}
                      >
                        STT
                      </th>
                      <th
                        className="sorting"
                        align="center"
                        aria-controls="datatable"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "300px" }}
                      >
                        Tên kì thi
                      </th>
                      
                      <th
                        className="sorting"
                        align="center"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "40px" }}
                      >
                        Thời gian thi
                      </th>
                      <th
                        className="sorting"
                        align="center"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: "87px" }}
                      >
                        Thao tác
                      </th>
                    </tr>
                  </thead>
                  {this.props.quanLyKyThi.map((value, key) => {
                  return  <ItemKiThi data={value} key={key} count = {key}/>

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
      quanLyKyThi: state.quanLyKyThi
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAPI: bindActionCreators(getAPI, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuanLyKiThi)
