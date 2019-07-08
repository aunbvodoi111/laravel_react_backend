import * as Types from './../constants/index'
import { ROOT_URL } from './../constants/api'  
import axios from 'axios'

export const fetchDataOrder = () => {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/list/bill`).then(response => {
            dispatch(fetchDataStore(response.data))
        })
    }
}

export const fetchDataStore = (data) => {
    return {
        type: Types.LIST_ORDER,
        data
    }
}

export const fetchDataOrderDetail = (id) => {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/list/bill/detail/`+id).then(response => {
            dispatch(fetchDataDetailStore(response.data))
        })
    }
}

export const fetchDataDetailStore = (data) => {
    return {
        type: Types.FETCH_DATA_ORDER_DETAIL,
        data
    }
}

