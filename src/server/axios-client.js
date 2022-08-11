import axios from 'axios';
import constant from '../utils/constant';

const client = axios.create({
  baseURL: constant.BASE_URL,
  headers: {
    'content-type': 'multipart/form-data',
  },
});

export default client;
