import React, { Component } from "react";
import Footer from "../Components/Footer/Footer";
import Nhap from "../Components/Login/Nhap";
import Time from "../Components/SinhVien/Time";

import Pagination from "react-js-pagination";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as getAPI from '../action/action';
import HeaderThi from "../Components/Header/HeaderThi";
class PageTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFull: true,
      news: [],
      activePage: 0,
      itemsCountPerPage: 0,
      totalItemsCount: 0,
      pageRangeDisplayed: 0,
    }; this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(pageNumber) {
    var randDom=Math.random();
    let query = `?v=${randDom}&page=${pageNumber}&manguoidung=${sessionStorage.getItem("manguoidung")}&tenkythi=${sessionStorage.getItem("tenkythi")}`;
    this.props.getAPI.getTopic(query)
        .then(response => {
            this.setState({
                news: this.props.getTopic.data,
                activePage: pageNumber,
        });
    })
  }
  componentWillMount(){
    var randDom=Math.random();
    let query1 = `?$v=${randDom}&page=${this.state.activePage}&manguoidung=${sessionStorage.getItem("manguoidung")}&tenkythi=${sessionStorage.getItem("tenkythi")}`;
    this.props.getAPI.getTopic(query1)
      .then(response => {
        this.setState({
          news: this.props.getTopic.data,
          activePage: this.props.getTopic.current_page,
          itemsCountPerPage: this.props.getTopic.per_page,
          totalItemsCount: this.props.getTopic.total,
          pageRangeDisplayed: this.props.getTopic.total
        });
      });
   }
  render() {  
    return (
      <div className="container body">
        <HeaderThi />
        <div className="right_col" role="main">
          <div className="col-md col-sm col-xs">
            <div className="x_panel">
              <div className="row">   
              {this.state.news.map((value, key) => {
                    return (
                      <div> 
                        <Time mathi = {this.props.getTopic.maKyThi}/>
                        <Nhap key={key} obj={value} count={this.state.activePage} mathi = {this.props.getTopic.maKyThi} />
                      </div>
                    );
                  })}
                  
                  <div style ={{textAlign: 'center'}} >
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                  </div>     
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      token: state.token,
      getTopic: state.getTopic
      
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      getAPI: bindActionCreators(getAPI, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageTest)
