import * as Types from '../constants/index'

var initialState = {
    // errors: [],
    orders: [],
    ordersDetail : {}
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
    console.log(action)
    switch (action.type) {
        // case Types.ERRORS:
        //     return { errors: [...action.errors], cates: state.cates };
        case Types.LIST_ORDER:
            return { orders: [...action.data.orders]};
        case Types.FETCH_DATA_ORDER_DETAIL:
            return { ordersDetail: action.data.ordersDetail};
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