import * as Types from './../constants/index'
import { ROOT_URL } from './../constants/api'
import axios from 'axios'

export const fetchData = () => {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/list/data`).then(response => {
            dispatch(fetchDataStore(response.data))
        })
    }
}

export const fetchProduct = () => {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/list/product`).then(response => {
            dispatch(fetchProductStore(response.data.products))
        })
    }
}

export const deleteCate = (id) => {
    return (dispatch) => {
        axios.get(`${ROOT_URL}/delete/cate/` + id).then(response => {
            dispatch(deleteCateStore(id))
        })
    }
}

export const addProduct = (product) => {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/add/product`, {
            name: product.name,
            SubcateId: product.SubcateId,
            UnitId: product.UnitId,
            description: product.description,
            discount: product.discount,
            qty: product.qty,
            mass: product.mass,
            image: product.image,
            price: product.price,
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
        axios.post(`${ROOT_URL}/update/cate`, {
            id: cate.id,
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

export const fetchProductStore = (products) => {
    return {
        type: Types.LIST_PRODUCT,
        products
    }
}
export const updateCateStore = (cate) => {
    return {
        type: Types.UPDATE_CATE,
        cate
    }
}
export const deleteCateStore = (id) => {
    return {
        type: Types.DELETE_CATE,
        id
    }
}
export const fetchDataStore = (data) => {
    return {
        type: Types.LIST_DATA,
        data
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