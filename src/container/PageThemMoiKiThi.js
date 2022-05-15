import React, { Component } from 'react';
import Footer from '../Components/Footer/Footer';
import Nav_left_Admin from '../Components/Nav_left/Nav_left_Admin';
import Top_nav from '../Components/Top_nav/Top_nav';
import QuanLyKiThi from '../Components/QuanLyKiThi/QuanLyKiThi';
import './style1.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as getAPI from '../action/action';

class PageThemMoiKiThi extends Component {
    constructor(props) {
        super(props);
        this.state = {
          statusTopNav: false,
        };
    }
    handleClick = () => {
        this.setState({
          statusTopNav: !this.state.statusTopNav,
        });
    }
    componentWillMount() {
        this.props.getAPI.getStatusNav(this.props.match.params.id);
    }
    render() {
        return (
        <div className={this.state.statusTopNav === false ? "nav-md" : "nav-sm"}>
            <div className="container body">
                    <div className="main_container">
                        <Nav_left_Admin />
                        <Top_nav handleClick={() => this.handleClick()} />
                        <div className="right_col" role="main">
                            <div className="col-md col-sm col-xs">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Danh sách kì thi</h2>
                                        <div className="clearfix"/>
                                    </div>
                                    <QuanLyKiThi />
                                </div>
                            </div> 
                            <Footer />   
                        </div> 
                    </div>
                </div>
            </div>
                
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        status: state.status,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAPI: bindActionCreators(getAPI, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageThemMoiKiThi)
