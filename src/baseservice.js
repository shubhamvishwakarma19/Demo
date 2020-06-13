import axios from 'axios';


export const baseURL = "http://dummy.restapiexample.com/api/v1/";
const baseService = axios.create({baseURL:baseURL});

baseService.interceptors.request.use((config)=>{
    if( localStorage.getItem('currentuser') ) {
        config.headers['auth-token'] = "Bearer";
    }
    return config;
}, error => {
    return Promise.reject(error);
});

baseService.interceptors.response.use((config)=>{
    return config;
},error => {
    
});
export default baseService;