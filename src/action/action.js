
import { employeListService, addNewEmploye,updateEmploye,deleteEmploye} from '../authservice';
import { EMPLOYE } from '../reducer/reducer';



export const getEmployeList = () => {
    return dispatch => {
        employeListService().then((res) => {
            if(res && res.data &&res.data.status && res.data.status==="success" ){
                dispatch({type: EMPLOYE, payload: res.data.data});
            }
        }).catch((err) => {
            console.log(err);
        });
    };

};

export const addNewEmployes = (payload) => {
    return dispatch => {
        addNewEmploye(payload).then((res) => {
            if(res && res.data &&res.data.status && res.data.status==="success" ){
                dispatch({type: EMPLOYE, payload: res.data.data});
                dispatch( getEmployeList());
                
            }else{
                alert("Something went to wrong");
            }
           
        }).catch((err) => {
            console.log(err);
            
        });

    };

};
export const updateEmployes = (payload,id) => {
    return dispatch => {
        updateEmploye(payload,id).then((res) => {
            if(res && res.data &&res.data.status && res.data.status==="success" ){
                dispatch({type: EMPLOYE, payload: res.data.data});
                alert("Update Successfully")

                dispatch( getEmployeList());
                
            }else{
                alert("Something went to wrong");
            }
           
        }).catch((err) => {
            console.log(err);
            
        });

    };

};

export const deleteEmployes = (id) => {
    return dispatch => {
        deleteEmploye(id).then((res) => {
            if(res && res.data &&res.data.status && res.data.status==="success" ){
                dispatch({type: EMPLOYE, payload: res.data.data});
                alert("deleted Successfully")
                dispatch( getEmployeList());
                
            }else{
                alert("Something went to wrong");
            }
           
        }).catch((err) => {
            console.log(err);
            
        });

    };

};


export const resetData = () => {
    return dispatch => {
     
            dispatch({type: EMPLOYE, payload: []});
    };

};







