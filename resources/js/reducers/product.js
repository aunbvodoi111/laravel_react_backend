import * as Types from '../constants/index'

var initialState = {
    // errors: [],
    cates: [],
    subcates: [],
    units: [],
    products:[]
}
var findIndex = (subcates, id) => {
    var result = -1;
    subcates.forEach((subcate, index) => {
        if (subcate.id === id) {
            result = index;
        }
    });
    return result;
}
const product = (state = initialState, action) => {
    var index = -1;
    var { subcate, id } = action
    console.log(action.products)
    switch (action.type) {
        // case Types.ERRORS:
        //     return { errors: [...action.errors], cates: state.cates };
        case Types.LIST_DATA:
            return { cates: [...action.data.cates], subcates: [...action.data.subcates], units: [...action.data.units] };
        case Types.LIST_PRODUCT:
            return { products: [...action.products]};
        // case Types.UPDATE_CATE:
        //     index = findIndex(state.cates, cate.id);
        //     state.cates[index] = cate;
        //     return { cates: [...state.cates] };
        // case Types.DELETE_SUBCATE:
        //     console.log(state.subcates)
        //     index = findIndex(state.subcates, id);
        //     state.subcates.splice(index, 1);
        //     console.log( state.subcates)
        //     return { ...state, subcates: [...state.subcates] };
        // case Types.ADD_SUBCATE:
        //     state.subcates.push(subcate)
        //     return { ...state, subcates: [...state.subcates] };
        default:
            return { ...state }
    }
}

export default product;