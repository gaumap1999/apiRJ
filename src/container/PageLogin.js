import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as getAPI from '../action/action';
import Login from '../Components/Login/Login';

class PageLogin extends Component {
    render() {  
        console.log(this.props.token)
        if(this.props.token === 'Sai mat khau!'){
            alert('Sai mat khau!')
        }else if(this.props.token === 'Sai tai khoan!'){
            alert('Sai tai khoan!')
        }
        return (
                <div className="container body">
                        <Header />
                        <div className="right_col" role="main">
                            <div className="col-md col-sm col-xs">
                                <div className="x_panel" style={{background:'#F8F5EC'}}>
                                    <Login 
                                        token={this.props.token.token} 
                                        xacNhan={this.props.getAPI} 
                                        vaiTro = {this.props.token.vaiTro}
                                        maNguoiDung = {this.props.token.maNguoiDung}
                                        data = {this.props.token}
                                    />
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
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAPI: bindActionCreators(getAPI, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageLogin)