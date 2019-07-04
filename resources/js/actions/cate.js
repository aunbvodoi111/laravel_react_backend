import * as Types from './../constants/index'
import ROOT_UR from './../constants/api'
import axios from 'axios'

export const fetchCate = () => {
    return (dispatch) => {
        axios.get('/list/cate').then(response => {
            dispatch(fetchCateStore(response.data.cates))
        })
    }
}

export const deleteCate = (id) => {
    return (dispatch) => {
        axios.get('/delete/cate/'+ id).then(response => {
            dispatch(deleteCateStore(id))
        })
    }
}

export const addCate = (cate) => {
    return (dispatch) => {
        axios.post('/add/cate', {
            name: cate.name,
            image : cate.image
        }).then(response => {
            dispatch(addCateStore(response.data.cate))
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
export const deleteCateStore = (id) =>{
    return {
        type: Types.DELETE_CATE,
        id
    }
}
export const fetchCateStore = (cates) => {
    return {
        type: Types.LIST_CATE,
        cates
    }
}
export const addCateStore = (cate) => {
    return {
        type: Types.ADD_CATE,
        cate
    }
}
export const errors = (errors) => {
    return {
        type: Types.ERRORS,
        errors
    }
}