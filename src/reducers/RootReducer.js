import {combineReducers} from "redux";
import ProductListRedicer from './ProductsListReducer';

const RootReducer = combineReducers({ProductList: ProductListRedicer,});
export default RootReducer;