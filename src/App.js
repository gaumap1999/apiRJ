import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PageAddUser from './container/PageAddUser';
import PageAdmin from './container/PageAdmin';
import PageThemMoiKiThi from './container/PageThemMoiKiThi';
import PageThemTenKiThi from "./container/PageThemTenKiThi";
import PageKhoLuuTru from "./container/PageKhoLuuTru";
import PageLogin from "./container/PageLogin";
import PageQuanLySinhVien from "./container/PageQuanLySinhVien";
import PageAddExel from "./container/PageAddExcel";
import PageQuanLyDeThi from './container/PageQuanLyDeThi';
import PageTest from "./container/PageTest";
import PageTaoDeThi from "./container/PageTaoDeThi";
import PageHocSinh from "./container/PageHocSinh";
import PageKetQua from "./container/PageKetQua";
import PagePhatDeThi from "./container/PagePhatDeThi";
import PageChiTiet from "./container/PageChiTiet";
import PageThemCauHoi from "./container/PageThemCauHoi";
import PageDanhSachHocSinh from "./container/PageDanhSachHocSinh";
import PageGiaoVien from "./container/PageGiaoVien";
import QuanLyHocSinhGV from "./container/QuanLyHocSinhGV";
import PageOnTap from "./container/PageOnTap";
import KetQuaOnTap from "./container/KetQuaOnTap";
import ChiTietOnTap from "./container/ChiTietOnTap";
import ThongKeAdmin from "./container/ThongKeAdmin";
// import DanhSachHocSinhGV from "./container/DanhSachHocSinhGV";
// import ThemHocSinhGV from "./container/ThemHocSinhGV";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={PageLogin} />
          <Route path="/admin/user" component={PageAdmin} />
          <Route path="/admin1/user/:id" component={PageAdmin} />
          <Route path="/admin/adduser" component={PageAddUser} />
          <Route path="/sinhvien/:id" component={PageQuanLySinhVien} />
          {/* <Route path="/hocsinh/:id" component={QuanLyHocSinhGV} /> */}

          <Route path="/themmoisinhvienexcel" component={PageAddExel} />
          <Route path="/quanLyKiThi/:id" component={PageThemMoiKiThi} />
          <Route path="/tenKiThi" component={PageThemTenKiThi} />
          <Route path="/khoLuuTru/:id" component={PageKhoLuuTru} />
          <Route path="/themcauhoi" component={PageThemCauHoi} />
          <Route path="/test" component={PageTest} />
          <Route path="/hocsinh" component={PageHocSinh} />
          <Route path="/danhsachhocsinh" component={PageDanhSachHocSinh} />
          <Route path="/giaovien" component={PageGiaoVien} />

          <Route path="/ketqua" component={PageKetQua} />
          <Route path="/ketquaontap" component={KetQuaOnTap} />

          <Route path="/xemchitiet" component={PageChiTiet} />
          <Route path="/xemchitietontap" component={ChiTietOnTap} />

          <Route path="/thongke/:id" component={ThongKeAdmin} />


          {/* <Route path="/test1" component={DeleteAccountAdmin} /> */}
          {/* Tao de thi */}
          <Route path="/quanlydethi/:id" component={PageQuanLyDeThi} />
          <Route path="/taodethi" component={PageTaoDeThi} />
          <Route path="/phatdethi" component={PagePhatDeThi} />

          <Route path="/ontap" component={PageOnTap} />

        </Router>

      </div>
    );
  }
}

export default App;
