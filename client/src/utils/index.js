import axios from "axios";
import { useSelector } from "react-redux";

//请求拦截
axios.interceptors.request.use(
  (config) => {
    // headers authorization: local storgae
    const token = useSelector((state) => state.user.token);
    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },

  //errors is responsible for the err send back from the back end api
  (error) => {
    return Promise.reject(error);
  }
);

// When the response is finish , then loading stop
//请求拦截
axios.interceptors.response.use(
  (response) => {
    // headers authorization: local storgae

    return response;
  },
  //errors is responsible for the err send back from the back end api
  (error) => {
    return Promise.reject(error);
  }
);
// export it

export default axios;
