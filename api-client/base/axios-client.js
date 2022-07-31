import axios from "axios";

let callbackErrorAuthentication = () => {};

export const constructCallBack = (handle) => {
  callbackErrorAuthentication = handle;
};

const axiosClient = axios.create({
  baseURL: process.env.API_URL + "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    if (error.response?.status === 401) {
      callbackErrorAuthentication();
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

axiosClient.interceptors.request.use(function (config) {
  return config;
});

export const fetcherClient = (url) => axiosClient.get(url);

export default axiosClient;
