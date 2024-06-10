import axios from "axios";

const axiosApiInstance = axios.create();
axiosApiInstance.defaults.baseURL = 'https://bio-baum-bauer-backend.onrender.com';
axiosApiInstance.defaults.withCredentials = true;

//interceptor for request
// axiosApiInstance.interceptors.request.use(config => {
//     console.log("Requested...!");
//     return config;
// }, error => {
//     return Promise.reject(error);
// })

//intercepts responses.
// axiosApiInstance.interceptors.response.use(config => {
//     console.log("Responded...!");
//     return config;
// }, error => {
//     console.log("responded with Error", error.response);
//     /*
//      if (error.response.status === 401) {
//         console.log("401 error happened, token is not valid anymore");
//         window.location = "/logout";
//     }
//     */

//     return Promise.reject(error);
// })


export default axiosApiInstance;