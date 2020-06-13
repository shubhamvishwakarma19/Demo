import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import EMPLOYE from './reducer';

const appReducer =  combineReducers({EMPLOYE,routerReducer});
const IndexReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    
  
    return appReducer(state, action);
  };
  export default IndexReducer;


