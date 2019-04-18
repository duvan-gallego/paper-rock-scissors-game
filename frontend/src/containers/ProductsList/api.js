import { apiInstance, errorHandler } from '../../api';

const getProductsApi = (params) => (
  apiInstance({
    url: '/products',
    method: 'get',
    params
  })
    .then(({ data: result }) => result)
    .catch(errorHandler)
);

export default getProductsApi;
