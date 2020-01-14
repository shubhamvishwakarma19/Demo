import axios from 'axios';
import store from './store';


export const baseURL = "https://api.dev.pastorsline.com/api";
const baseService = axios.create({baseURL:baseURL});

baseService.interceptors.request.use((config)=>{
    if( localStorage.getItem('currentuser') ) {
        config.headers['auth-token'] = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk";
    }
    return config;
}, error => {
    return Promise.reject(error);
});

baseService.interceptors.response.use((config)=>{
    return config;
},error => {
    // if(error.response.status === 401){
    //     localStorage.clear();
    //     store.dispatch({type: LOGOUT});
    //     const dialogData = {
    //         showDialog: true,
    //         caption: 'Error',
    //         type: 'genericError',
    //         dialogSize: 'small',
    //         bodyData: {
    //             message:'Unauthorized User',
    //         }
    //     };
    //     store.dispatch({payload:dialogData});
    // }
    // history.push(`${process.env.PUBLIC_URL}/`);
});
export default baseService;