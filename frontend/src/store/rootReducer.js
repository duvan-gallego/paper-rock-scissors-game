import { combineReducers } from 'redux';

import products from '../containers/ProductsList/redux';


const rootReducer = combineReducers({
  products
});

export default rootReducer;