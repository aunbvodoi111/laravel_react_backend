import { combineReducers } from 'redux';
// import products from './products';
import cate from './cate'
import subcate from './subcate'
import unit from './unit'
import product from './product'
import order from './order'
const appReducers = combineReducers({
    cate,
    subcate,
    unit,
    product,
    order
});

export default appReducers;