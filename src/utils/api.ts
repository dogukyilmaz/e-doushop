import Axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:4500/api/v1";

const REQUEST_TIMEOUT = 10000;
export const LS_TOKEN_VAR = "e-doushop-token";

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
  maxContentLength: 10000,
  // withCredentials: false, // default false
  // responseType: "json", // default json
  // maxBodyLength: 10000, // nodejs only
};

const API = Axios.create(config);

API.defaults.headers.post["Content-Type"] = "application/json";
API.defaults.headers.put["Content-Type"] = "application/json";
// API.defaults.headers.delete["Content-Type"] = "application/json";

// TODO:?? Can be used for custom config etc. per request.
// API.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// TODO:?? Can be used for response value per request/Return type/value/response could be handled from here.
// API.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data

//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error

//     return Promise.reject(error);
//   }
// );

export const setAuthToken = (token?: string) => {
  // Clear headers always before set.
  API.defaults.headers.common["Authorization"] = "";
  delete API.defaults.headers.common["Authorization"];

  let TOKEN;

  if (token) {
    TOKEN = token;
    localStorage.setItem(LS_TOKEN_VAR, token);
  } else {
    TOKEN = localStorage.getItem(LS_TOKEN_VAR);
  }

  API.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;
  return TOKEN;
};

export const clearAuthToken = () => {
  API.defaults.headers.common["Authorization"] = "";
  delete API.defaults.headers.common["Authorization"];

  localStorage.removeItem(LS_TOKEN_VAR);
};

export default API;
