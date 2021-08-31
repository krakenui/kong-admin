import axios from 'axios';

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_AUTH_API_URL,
    timeout: 30 * 1000,
    withCredentials: true,
    headers: { accept: 'application/json' },
});

httpClient.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export default httpClient;
