import { combineReducers } from 'redux';
// import products from './products';
import cate from './cate'
import subcate from './subcate'
import unit from './unit'
import product from './product'
const appReducers = combineReducers({
    cate,
    subcate,
    unit,
    product
});

export default appReducers;