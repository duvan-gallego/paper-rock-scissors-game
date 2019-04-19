import { apiInstance, errorHandler } from '../../api';

const initGameApi = (payload) => (
  apiInstance({
    url: '/games',
    method: 'post',
    data: payload,
  })
    .then(({ data: result }) => result)
    .catch(errorHandler)
);

export default initGameApi;
