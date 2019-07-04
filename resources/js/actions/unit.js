import * as Types from './../constants/index'
import ROOT_URL from './../constants/api'
import axios from 'axios'

export const fetchUnit = () => {
    return (dispatch) => {
        axios.get('/list/unit').then(response => {
            dispatch(fetchUnitStore(response.data.units))
        })
    }
}

export const deleteUnit = (id) => {
    return (dispatch) => {
        axios.get('/delete/unit/'+ id).then(response => {
            dispatch(deleteUnitStore(id))
        })
    }
}

export const addUnit = (unit) => {
    return (dispatch) => {
        axios.post('/add/unit', {
            name: unit.name
        }).then(response => {
            dispatch(addUnitStore(response.data.unit))
        })
        .catch(error => {
            if (error.response) {
                dispatch(errors(error.response.data.errors.name))
            }
        })
    }
}
export const updateUnit = (cate) => {
    return (dispatch) => {
        axios.post('/update/unit', {
            id : cate.id,
            name: cate.name
        }).then(response => {
            dispatch(updateUnitStore(response.data.cate))
        })
        .catch(error => {
            if (error.response) {
                dispatch(errors(error.response.data.errors.name))
            }
        })
    }
}

export const updateUnitStore = (cate) => {
    return {
        type: Types.UPDATE_UNIT,
        cate
    }
}
export const deleteUnitStore = (id) =>{
    return {
        type: Types.DELETE_UNIT,
        id
    }
}
export const fetchUnitStore = (units) => {
    return {
        type: Types.LIST_UNIT,
        units
    }
}
export const addUnitStore = (unit) => {
    return {
        type: Types.ADD_UNIT,
        unit
    }
}
export const errors = (errors) => {
    return {
        type: Types.ERRORS,
        errors
    }
}