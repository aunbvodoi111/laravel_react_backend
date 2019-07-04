import * as Types from './../constants/index'

var initialState = {
    errors: [],
    cates: []
}
var findIndex = (cates, id) => {
    var result = -1;
    cates.forEach((cate, index) => {
        if (cate.id === id) {
            result = index;
        }
    });
    return result;
}
const cate = (state = initialState, action) => {
    var index = -1;
    var { cate, id } = action
    switch (action.type) {
        case Types.ERRORS:
            return { errors: [...action.errors], cates: state.cates };
        case Types.LIST_CATE:
            return { cates: [...action.cates] };
        case Types.UPDATE_CATE:
            index = findIndex(state.cates, cate.id);
            state.cates[index] = cate;
            return { cates: [...state.cates] };
        case Types.DELETE_CATE:
            index = findIndex(state.cates, id);
            state.cates.splice(index, 1);
            return { cates: [...state.cates] };
        case Types.ADD_CATE:
            state.cates.push(cate)
            return { ...state, cates: [...state.cates] };
        default:
            return { ...state }
    }
}

export default cate;