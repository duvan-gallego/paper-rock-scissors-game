import {
  FETCH_PRODUCTS
} from './constants';

const fetchProducts = (size, page, category, searchString) => ({
  type: FETCH_PRODUCTS,
  payload: {
    size,
    page,
    category,
    searchString
  }
});

export default fetchProducts;