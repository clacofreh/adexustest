import axios from 'axios';

const reqresApi = axios.create({
  baseURL: 'https://reqres.in/api',
});

export default reqresApi;
