import { apiInstance, errorHandler } from '../../api';

const contactApi = (payload) => (
  apiInstance({
    url: '/contact',
    method: 'post',
    data: payload,
  })
    .then(({ data: result }) => result)
    .catch(errorHandler)
);

export default contactApi;
