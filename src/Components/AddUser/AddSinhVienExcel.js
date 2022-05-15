import React, { Component } from "react";
import * as getAPI from "../../action/action";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class AddSinhVienExcel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
    };
  }
  async submit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("uploadfile", this.state.file);
    this.props.getAPI.uploadFile(formData)
      .then((res)=>{
        console.log(res)
      })
  }
  setFile(e) {
    this.setState({ file: e.target.files[0] });
  }
  render() {
    return (
      <div className="x_content">
        <p></p>
        <form name="user_frm" className="form-horizontal form-label-left">
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12"></label>
            <div
              className="col-md-6 col-sm-6 col-xs-12"
              style={{ fontStyle: "italic" }}
            >
              <a
                href="# "
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Tải File mẫu thêm sinh viên{" "}
              </a>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12">
              Upload sinh viên từ file excel
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <input
                type="file"
                name="uploadfile"
                className="form-control col-md-7 col-xs-12 pimport"
                accept=".xls,.xlsx"
                onChange={e => this.setFile(e)}
              />
            </div>
          </div>
          <div className="ln_solid" />
          <div className="form-group text-center">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <button className="btn btn-round btn-primary btn-lg">
                Quay lại
              </button>
              <button
                type="submit"
                className="btn btn-round btn-primary btn-lg"
                onClick={(e) => {
                  this.submit(e)
                }}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAPI: bindActionCreators(getAPI, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddSinhVienExcel);
