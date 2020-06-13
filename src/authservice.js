import baseService from './baseservice';

export const employeListService = () => {

    return baseService.get('/employees');
};
export const addNewEmploye = (request) => {
    return baseService.post('/create',request);
};

export const updateEmploye = (request,id) => {
    return baseService.put('/update/'+id,request);
};
export const deleteEmploye = (id) => {
    return baseService.delete('/delete/'+id);
};





