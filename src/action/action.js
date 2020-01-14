
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
            // console.log(res);
            // console.log(userData.data.result_status);
            // if(userData.data.result_status=== 'success'){
            //     }else{
            //     alert('invalid crendential')
            // }
            dispatch({type: CONTACT, payload: res.data.contacts});
        }).catch((err) => {
            throw(err);
            
        });
        console.log("CONTACT is running")

    };

};

export const contactUSAll = (searchValue,page) => {
    return dispatch => {
        contactUSAllService(searchValue,page).then((res) => {
            // console.log(res);
            // console.log(userData.data.result_status);
            // if(userData.data.result_status=== 'success'){
            //     }else{
            //     alert('invalid crendential')
            // }
            dispatch({type: USCONTACT, payload: res.data.contacts});
        }).catch((err) => {
            throw(err);
            
        });
        console.log("contactUSAllService is running")

    };

};







