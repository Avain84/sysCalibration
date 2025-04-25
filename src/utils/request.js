import axios from 'axios';

const baseURL = '/api';

const instance = axios.create({
  baseURL,
  timeout: 100000,
});

export default instance;
