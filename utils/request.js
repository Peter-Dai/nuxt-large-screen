import axios from 'axios';

const httpService = axios.create({
  baseURL: '',
  timeout: 20000,
});

httpService.interceptors.request.use(config =>
  // helper.showLoading();
  // config.headers['X-Token'] = anthService.getToken()
  config
  , err =>
  // helper.closeLoading();
  Promise.reject(err),
);

httpService.interceptors.response.use(response =>
  // helper.closeLoading();
  response.data
  , err =>
  // helper.closeLoading();
  Promise.reject(err),
);

export default httpService;
