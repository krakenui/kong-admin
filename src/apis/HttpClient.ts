import axios from 'axios';

const httpClient = axios.create({});

httpClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    const res = response.data;

    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default httpClient;
