import baseService from './baseservice';
// import { file } from '@babel/types';
// import login from '../components/login/login';
// import admin  from './../components/admin/admin'
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNzEiLCJleHAiOjE2MDM3ODM0Mzd9.3ievseHtX0t3roGh7nBuNsiaQeSjfiHWyyx_5GlOLXk'
  }

export const contactAllService = (SearchValue,page) => {
    let value = SearchValue
    
    return baseService.get('https://api.dev.pastorsline.com/api/contacts.json?companyId=171&query='+value+'&page='+page+'&countryId=',{headers:headers});
};
export const contactUSAllService = (SearchValue,page) => {
    let value = SearchValue
    return baseService.get('https://api.dev.pastorsline.com/api/contacts.json?companyId=171&query='+value+'&page='+page+'&countryId=226',{headers:headers});
};


