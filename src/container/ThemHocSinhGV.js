import React, { Component } from 'react';
import AddSinhVienExcel from '../Components/AddUser/AddSinhVienExcel';
import Top_nav from '../Components/Top_nav/Top_nav';
import Footer from '../Components/Footer/Footer';
import Nav_Left_GiaoVien from '../Components/Nav_left/Nav_Left_GiaoVien';

class PageAddExel extends Component {
    render() {
        return ( 
            <div className="nav-md">
                <div className="container body">
                    <div className="main_container">
                        <Nav_Left_GiaoVien />
                        <Top_nav />
                        <div className="right_col" role="main">
                            <div className="col-md col-sm col-xs">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Thêm mới tài khoản sinh viên</h2>
                                        <div className="clearfix"/>
                                    </div>
                                    <AddSinhVienExcel />
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

export default PageAddExel;