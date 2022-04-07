import axios from 'axios';
import {SERVER_URL} from '../constants/server';

let baseURL = SERVER_URL;
let instance = axios.create();
instance.defaults.baseURL = baseURL;

export default instance;
