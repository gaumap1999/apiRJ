import React, { Component } from 'react';
import Footer from '../Components/Footer/Footer';
import Nav_left_Admin from '../Components/Nav_left/Nav_left_Admin';
import Top_nav from '../Components/Top_nav/Top_nav';
import TaoDeThi from '../Components/DeThi/TaoDeThi';
import './style1.css';

class PageTaoDeThi extends Component {
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
      };
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
                                        <h2>Tạo mới đề thi</h2>
                                        <div className="clearfix"/>
                                    </div>
                                    <TaoDeThi />
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

export default PageTaoDeThi;