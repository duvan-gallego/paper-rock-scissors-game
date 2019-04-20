import { apiInstance, errorHandler } from '../../api';

export const initGameApi = (payload) => (
  apiInstance({
    url: '/games',
    method: 'post',
    data: payload,
  })
    .then(({ data: result }) => result)
    .catch(errorHandler)
);

export const getGameMovesApi = () => (
  apiInstance({
    url: '/moves',
    method: 'get'
  })
    .then(({ data: result }) => result)
    .catch(errorHandler)
);
