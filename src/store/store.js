import { createStore, applyMiddleware } from 'redux';
import * as types from '../common/action.type';
import thunk from 'redux-thunk';
const reducerInitialState = {
    getDataAdmin: [],
    getHocSinh: [],
    status: 1,
    getListQuestions: [],
    token: '',
    getTopic: [],
    addDataAdmin: [],
    manguoidung:0,
    isDelete: false,
    thoiGianThi:0,
    getKyThi: [],
    loadDeThi: [],
    loadTenKyThi: [],
    phatDeThi: '',
    loadKyThi: [],
    thongTinTopNav: [],
    chamDiem:[],
    chamDiemOnTap:[],
    xemChiTiet: [],
    xemChiTietOnTap: [],
    boCauHoi: [],
    quanLyKyThi: [],
    onTap: [],
    thongKe: [],
    themKyThi: [],
    themCauHoi: [],
    taoDeThi: []
    
}
const reducerAll = (state = reducerInitialState, action) => {
    switch (action.type) {
        case types.GET_DATA_ADMIN:
            return {...state, getDataAdmin: action.getDataAdmin}
        case types.GET_HOC_SINH:
            return {...state, getHocSinh: action.getHocSinh}
        case types.POST_ADD_ADMIN:
            return {...state, addDataAdmin: action.addDataAdmin}
        case types.GET_STATUS_NAV:
            return {...state, status: action.status}
        case types.GET_LIST_QUESTIONS:
            return {...state, getListQuestions: action.getListQuestions}
        case types.LOGIN:
            return {...state, token: action.token}
        case types.GET_TOPIC:
            return {...state, getTopic: action.getTopic}
        case types.GET_MANGUOIDUNG:
            return {...state, manguoidung: action.manguoidung}
        case types.ALERT_ON:
            return {...state, isDelete: true}
        case types.ALERT_OFF:
            return {...state, isDelete: false}
        case types.THOI_GIAN_THI:
            return {...state, thoiGianThi: action.thoiGianThi}
        case types.GET_KY_THI:
            return {...state, getKyThi: action.getKyThi}
        case types.QUAN_LY_KY_THI:
            return {...state, quanLyKyThi: action.quanLyKyThi}
        case types.LOAD_DE_THI:
            return {...state, loadDeThi: action.loadDeThi}
        case types.LOAD_KY_THI_PHAT_DE:
            return {...state, loadTenKyThi: action.loadTenKyThi}
        case types.PHAT_DE_THI:
            return {...state, phatDeThi: action.phatDeThi}
        case types.LOAD_KY_THI:
            return {...state, loadKyThi: action.loadKyThi}  
        case types.THONG_TIN_TOP_NAV:
            return {...state, thongTinTopNav: action.thongTinTopNav} 
        case types.CHAM_DIEM:
            return {...state, chamDiem: action.chamDiem}  
        case types.CHAM_DIEM_ON_TAP:
            return {...state, chamDiemOnTap: action.chamDiemOnTap}
        case types.XEM_CHI_TIET:
            return {...state, xemChiTiet: action.xemChiTiet} 
        case types.XEM_CHI_TIET_ON_TAP:
            return {...state, xemChiTietOnTap: action.xemChiTietOnTap}
        case types.BO_CAU_HOI:
            return {...state, boCauHoi: action.boCauHoi} 
        case types.ON_TAP:
            return {...state, onTap: action.onTap} 
        case types.THONG_KE:
            return {...state, thongKe: action.thongKe} 
        case types.THEM_KY_THI:
            return {...state, themKyThi: action.themKyThi} 
        case types.THEM_CAU_HOI:
            return {...state, themCauHoi: action.themCauHoi}   
        case types.TAO_DE_THI:
            return {...state, taoDeThi: action.taoDeThi}  
        default:
            return state
    }
}

const store = createStore(reducerAll, applyMiddleware(thunk))

export default store;