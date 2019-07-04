import * as Types from './../constants/index'
import { ROOT_URL } from './../constants/api'
import axios from 'axios'

export const fetchSubcate = () => {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/list/subcate`).then(response => {
            console.log(response.data)
            dispatch(fetchSubcateStore(response.data))
        })
    }
}

export const fetchSubcateStore = (data) => {
    return {
        type: Types.LIST_SUBCATE,
        data
    }
}

export const deleteSubcate = (id) => {
    return (dispatch) => {
        axios.get('/delete/subcate/'+ id).then(response => {
            dispatch(deleteSubcateStore(id))
        })
    }
}

export const addSubcate = (subcate) => {
    return (dispatch) => {
        axios.post('/add/subcate', {
            name: subcate.name,
            CateId: subcate.CateId
        }).then(response => {
            dispatch(addSubcateStore(response.data.subcate))
        })
        .catch(error => {
            if (error.response) {
                dispatch(errors(error.response.data.errors.name))
            }
        })
    }
}
export const updateCate = (cate) => {
    return (dispatch) => {
        axios.post('/update/cate', {
            id : cate.id,
            name: cate.name
        }).then(response => {
            dispatch(updateCateStore(response.data.cate))
        })
        .catch(error => {
            if (error.response) {
                dispatch(errors(error.response.data.errors.name))
            }
        })
    }
}

export const updateCateStore = (cate) => {
    return {
        type: Types.UPDATE_CATE,
        cate
    }
}
export const deleteSubcateStore = (id) =>{
    return {
        type: Types.DELETE_SUBCATE,
        id
    }
}

export const addSubcateStore = (subcate) => {
    return {
        type: Types.ADD_SUBCATE,
        subcate
    }
}
export const errors = (errors) => {
    return {
        type: Types.ERRORS,
        errors
    }
}