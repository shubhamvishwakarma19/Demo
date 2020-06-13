

let initialState = {
    employeList:[],
};

export const EMPLOYE = 'EMPLOYE';

export default (state=initialState,action) => {
    switch (action.type) {
        case EMPLOYE:
            return {...state, employeList:action.payload};
        default:
            return state;
    }
};


