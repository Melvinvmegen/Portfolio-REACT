import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://portfolio-d0aec.firebaseio.com/'
})

export default instance;
