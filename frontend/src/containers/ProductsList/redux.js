import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from './constants';

const initialState = {
  isFetching: false,
  data: null,
  elementsFetched: 0,
  totalElements: 0,
  page: 0,
  errorMsg: null
}

export default( state = initialState, action ) => {
  const {type, payload} = action;
  switch (type) {
  case FETCH_PRODUCTS:
    return {
      ...state,
      isFetching: true
    };
  case FETCH_PRODUCTS_SUCCESS:
    return {
      ...payload,
      data: payload.page === '1' ? payload.data : state.data.concat(payload.data),
      isFetching: false
    };
  case FETCH_PRODUCTS_ERROR:
    return {
      isFetching: false,
      errorMsg: payload
    };
  default:
    return state;
  }
}