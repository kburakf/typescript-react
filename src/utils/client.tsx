import axios from 'axios';

const token: any = localStorage.getItem('token');

const client = axios.create({
  headers: { token },
  baseURL: 'http://localhost:3001',
  timeout: 1000,
});

export default client;