import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://api.electronics.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosConfig;