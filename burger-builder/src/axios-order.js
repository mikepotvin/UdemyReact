import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-487b5.firebaseio.com/'
}); 

export default instance;