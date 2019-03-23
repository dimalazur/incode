import axios from 'axios';
import {url} from '../settings';

axios.defaults.baseURL = url;

const getClients = () => (
  axios.get()
);

export default {
  getClients
};