import * as Types from './../constants/index'

var initialState = {
    errors: [],
    units: []
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
const unit = (state = initialState, action) => {
    var index = -1;
    var { unit, id } = action
    console.log(action)
    switch (action.type) {
        case Types.ERRORS:
            return { errors: [...action.errors], cates: state.cates };
        case Types.LIST_UNIT:
            console.log('vaoday')
            return { units: [...action.units] };
        case Types.UPDATE_UNIT:
            index = findIndex(state.cates, cate.id);
            state.cates[index] = cate;
            return { cates: [...state.cates] };
        case Types.DELETE_UNIT:
            index = findIndex(state.units, id);
            state.units.splice(index, 1);
            return { units: [...state.units] };
        case Types.ADD_UNIT:
            state.units.push(unit)
            return { ...state, units: [...state.units] };
        default:
            return { ...state }
    }
}

export default unit;