

let initialState = {
    AllContactFromAPI:[],
    USAllContactFromAPI:[],

};



export const CONTACT = 'CONTACT';
export const USCONTACT = 'USCONTACT';

// export const REGISTER = 'REGISTER';
// // export const RESETPASSWORD = 'RESETPASSWORD';
// // export const LOGOUT = 'LOGOUT';
// // export const GET_LICENSE_AGREEMENT = 'GET_LICENSE_AGREEMENT';
// // export const ACCEPT_LICENSE_AGREEMENT = 'ACCEPT_LICENSE_AGREEMENT';


export default (state=initialState,action) => {
    switch (action.type) {
        case CONTACT:
            return {...state, AllContactFromAPI:action.payload};
        case USCONTACT:
                return {...state, USAllContactFromAPI:action.payload};
        default:
            return state;
    }
};


