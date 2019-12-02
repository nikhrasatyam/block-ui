import axio from 'axios';

const AxiosService = () => {
  const axios = axio.create({
    timeout: 20000,
    baseURL: '/api',
  });
  axios.interceptors.response.use(undefined, error => {
    throw error.message;
  });
  return axios;
};
export default AxiosService();
