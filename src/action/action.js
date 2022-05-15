import Axios from 'axios';
import * as types from '../common/action.type';
import URL from '../common/config'


export const getDataAdmin = (header) => {
    return function (dispatch) {
        Axios.get(URL + "nguoidung/getDataAdmin", {headers: header})
            .then(function (response) {
                dispatch({ type: types.GET_DATA_ADMIN, getDataAdmin: response.data })
            })
    }
}
//get hoc sinh
export const getHocSinh = () => {
    return function (dispatch) {
        Axios.get(URL + "nguoidung/getHocSinh")
            .then(function (response) {
                dispatch({ type: types.GET_HOC_SINH, getHocSinh: response.data })
            })
    }
}
export const getStatusNav = (status) => {
    return function(dispatch) {
        dispatch({ type: types.GET_STATUS_NAV, status: status})
    }
}
export const alertOff = (isDelete) => {
    return function(dispatch) {
        dispatch({ type: types.ALERT_OFF, isDelete: isDelete})
    }
}
export const alertOn = (isDelete) => {
    return function(dispatch) {
        dispatch({ type: types.ALERT_ON, isDelete: isDelete})
    }
}
export const getListQuestions = () => {
    return function (dispatch) {
        Axios.get(URL + `getListQuestions`)
            .then(function (response) {
                dispatch({ type: types.GET_LIST_QUESTIONS, getListQuestions: response.data })
            })
    }
}
export const token = (data) => {
    return function (dispatch) {
        Axios.post(URL + "user/login",data)
            .then(function (response) {
                dispatch({ type: types.LOGIN, token: response.data })
            })
    }
}
export const getTopic = (query,data) => {
    return function (dispatch) {
      return  Axios.get(URL + `dethi/dethi${query}`, data)
            .then(function (response) {
                dispatch({ type: types.GET_TOPIC, getTopic: response.data })
            })
    }
}
export const addDataAdmin = (data) => {
    return function (dispatch) {
        Axios.post(URL + "admin/addDataAdmin",data)
            .then(function (response){
                dispatch({type: types.POST_ADD_ADMIN, addDataAdmin: response.data})
            })
    }
}
//uploadFile
const config = {    
    headers: {    
        'content-type': 'multipart/form-data'                
    },
};
export const uploadFile = (data) => {
    return function () {
      return  Axios.post(URL + "file/api/uploadfile", data, config)
        .then(res =>{
            console.log('hiihihi')
        })
           
    }
}
//nop bai thi
export const nopBaiThi = (data) => {
    return function () {
        return Axios.post(URL + "bailam/nopbaithi",data)
            .then(res => {
                console.log('nop bai')
            })
    }
}
//lay thoi gian thi
export const thoiGianThi = (data) => {
    return function (dispatch) {
       return Axios.post(URL +"dethi/laythoigianthi",data)
        .then(function (response){
            dispatch({type: types.THOI_GIAN_THI, thoiGianThi: response.data});
            console.log(response)
        })
    }
}
//update thoi gian thi
export const updateThoiGian = (data) => {
    return function (dispatch) {
       return Axios.post(URL +"bailam/thoigianthi",data)
        .then(function (response){
            console.log('Update')
        })
    }
}
//Them ky thi
export const themKyThi = (data) => {
    return function (dispatch) {
       return Axios.post(URL +"kythi/taokythi",data)
        .then(function (response){
            dispatch({type: types.THEM_KY_THI, themKyThi: response.data});
        })
    }
}
// get ky thi
export const getKyThi = () => {
    return function (dispatch) {
       return Axios.get(URL +"kythi/getkythi")
        .then(function (response){
            dispatch({type: types.GET_KY_THI, getKyThi: response.data});        
        })
    }
}
// load ten ky thi (phatdethi)
export const loadTenKyThi = () => {
    return function (dispatch) {
       return Axios.get(URL +"kythi/tenkythi")
        .then(function (response){
            dispatch({type: types.LOAD_KY_THI_PHAT_DE, loadTenKyThi: response.data});        
        })
    }
}
// update trang thai ky thi
export const updateTrangThaiThi = (data) => {
    return function () {
       return Axios.post(URL +"kythi/updateTrangThai",data)
        .then(function (response){
            console.log('updateTrangThai')
        })
    }
}
// update trang thai phat de thi
export const updateTrangThaiPhatDe = (data) => {
    return function () {
       return Axios.post(URL +"kythi/updateTrangThaiPhatDe",data)
        .then(function (response){
            console.log('updateTrangThaiPhatDe')
        })
    }
}
// Tao de thi
export const taoDeThi = (data) => {
    return function (dispatch) {
       return Axios.post(URL +"dethi/taodethi",data)
        .then(function (response){
            dispatch({type: types.TAO_DE_THI, taoDeThi: response.data});        
        })
    }
}
// load de thi
export const loadDeThi = () => {
    return function (dispatch) {
       return Axios.get(URL +"dethi/quanlydethi")
        .then(function (response){
            dispatch({type: types.LOAD_DE_THI, loadDeThi: response.data});        
        })
    }
}
// Phat de thi
export const phatDeThi = (data) => {
    return function (dispatch) {
       return Axios.post(URL +"dethi/phatdethi",data)
        .then(function (response){
            dispatch({type: types.PHAT_DE_THI, phatDeThi: response.data});        
        })
    }
}
// load ky thi
export const loadKyThi = () => {
    return function (dispatch) {
       return Axios.get(URL +"kythi/loadkythi")
        .then(function (response){
            dispatch({type: types.LOAD_KY_THI, loadKyThi: response.data});        
        })
    }
}
//quan ly ky thi
export const quanLyKyThi = () => {
    return function(dispatch){
        return Axios.get(URL + "kythi/quanlykythi")
            .then(function(response){
                dispatch({type: types.QUAN_LY_KY_THI, quanLyKyThi: response.data});        
            })
    }
}
// phat bai lam
export const updateBaiLam = (data) => {
    return function () {
       return Axios.post(URL +"bailam/bailam",data)
        .then(function (response){
            console.log('them thanh cong')
        })
    }
}
// hienThiBai
// Top Nav
export const thongTinTopNav = (data)=>{
    return function (dispatch){
        return Axios.post(URL + "nguoidung/getNguoiDung", data)
            .then(function(response){
                dispatch({type: types.THONG_TIN_TOP_NAV, thongTinTopNav: response.data});        
            })
    }
}
// nop bai ne
export const chamDiem = (data)=>{
    return function (dispatch){
        return Axios.post(URL + "bailam/hienthiketqua", data)
            .then(function(response){
                dispatch({type: types.CHAM_DIEM, chamDiem: response.data});        
            })
    }
}
// xem chi tiet
export const xemChiTiet = (data)=>{
    return function (dispatch){
        return Axios.post(URL + "bailam/xemchitiet", data)
            .then(function(response){
                dispatch({type: types.XEM_CHI_TIET, xemChiTiet: response.data});        
            })
    }
}
//Bo cau hoi
export const getBoCauHoi = ()=>{
    return function (dispatch){
        return Axios.get(URL + "bocauhoi/bocauhoi")
            .then(function(response){
                dispatch({type: types.BO_CAU_HOI, boCauHoi: response.data});        

            })
    }
}
//Them cau hoi
export const themCauHoi = (data)=>{
    return function (dispatch){
        return Axios.post(URL + "bocauhoi/themcauhoi",data)
            .then(function(response){
                dispatch({type: types.THEM_CAU_HOI, themCauHoi: response.data});        
            })
    }
}
//on Tap
export const onTap = (data)=>{
    return function (dispatch){
        return Axios.post(URL + "dethi/thembailamontap",data)
            .then(function(response){
                dispatch({type: types.ON_TAP, onTap: response.data});        
            })
    }
}
// nop bai  on tap
export const nopBaiOnTap = (data) => {
    return function () {
        return Axios.post(URL + "dethi/nopbaiontap",data)
            .then(res => {
                console.log('nop bai on tap')
            })
    }
}
// nop bai ne
export const chamDiemOnTap = (data)=>{
    return function (dispatch){
        return Axios.post(URL + "dethi/hienthiketquaontap", data)
            .then(function(response){
                dispatch({type: types.CHAM_DIEM_ON_TAP, chamDiemOnTap: response.data});        
            })
    }
}
// xem chi tiet on tap
export const xemChiTietOnTap = (data)=>{
    return function (dispatch){
        return Axios.post(URL + "dethi/xemchitietontap", data)
            .then(function(response){
                dispatch({type: types.XEM_CHI_TIET_ON_TAP, xemChiTietOnTap: response.data});        
            })
    }
}
// thong ke
export const thongKe = ()=>{
    return function (dispatch){
        return Axios.get(URL + "thongke/thongke")
            .then(function(response){
                dispatch({type: types.THONG_KE, thongKe: response.data});        
            })
    }
}