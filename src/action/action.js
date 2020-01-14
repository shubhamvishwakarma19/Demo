
import { contactAllService, contactUSAllService} from '../authservice';
// import {LOGIN} from "./../reducers/auth";

// import { ENABLE_LOADING} from "../reducers/loading";
// import { GETLIST } from './../reducers/list';
// import { HOMECONTENT,SETTINGCONTENT } from './../reducers/homecontent';
// import { GETSERVICEDATA,GETSUBSCRIPTIONDATA,GETGALLERYDATA,UPLOADIMAGEDATA } from './../reducers/servicedata';
import { CONTACT ,USCONTACT } from '../reducer/reducer';



export const ContactAll = (searchValue,page) => {
    return dispatch => {
        contactAllService(searchValue,page).then((res) => {
            if(res.status=== 200){
                dispatch({type: CONTACT, payload: res.data.contacts});
            }else{
                alert('API is not Working')
            }
            
        }).catch((err) => {
            throw(err);
            
        });

    };

};

export const contactUSAll = (searchValue,page) => {
    return dispatch => {
        contactUSAllService(searchValue,page).then((res) => {
            if(res.status=== 200){
                dispatch({type: USCONTACT, payload: res.data.contacts});
            }else{
                alert('API is not Working')
            }
           
        }).catch((err) => {
            throw(err);
            
        });

    };

};

export const resetData = () => {
    return dispatch => {
     
            dispatch({type: CONTACT, payload: []});
            dispatch({type: USCONTACT, payload: []});

       

    };

};







