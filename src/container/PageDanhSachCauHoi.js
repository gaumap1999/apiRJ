import React, { Component } from 'react';
import Footer from '../Components/Footer/Footer';
import Nav_left_Admin from '../Components/Nav_left/Nav_left_Admin';
import Top_nav from '../Components/Top_nav/Top_nav';
import DanhSachCauHoi from '../Components/CauHoi/DanhSachCauHoi';
import NoiDungCauHoi from '../Components/CauHoi/NoiDungCauHoi';

class PageDanhSachCauHoi extends Component {
    render() {
        return (
            <div className="nav-md">
                <div className="container body">
                    <div className="main_container">
                        <Nav_left_Admin />
                        <Top_nav />
                        <div className="right_col" role="main" style={{ minHeight: "757px" }}>
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <DanhSachCauHoi />
                                    <NoiDungCauHoi />
                                </div>
                                <Footer />
                            </div>    
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default PageDanhSachCauHoi;