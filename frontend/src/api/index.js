import Axios from 'axios';

const BE_URL = {
  development: 'http://localhost:3001',
  production: 'https://www.mysuperproductionurl.com'
};

export const apiInstance = (() => (
  Axios.create({
    baseURL: `${BE_URL[process.env.NODE_ENV]}/api`,
  })
))();

export function errorHandler(error = {}) {
  let message = 'Bad request';
  if (error.toString() === 'Error: Network Error') {
    message = 'Network error, check the network conection'
  }  
  throw new Error(message);
}