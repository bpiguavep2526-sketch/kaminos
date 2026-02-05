import axios from 'axios'
window.axios = axios

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const url =  "http://localhost:3000/"
window.axios.defaults.baseURL = `${url}`;
