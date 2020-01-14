import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


// import List from './list';
import CONTACT from './reducer';
import USCONTACT from './reducer';


const appReducer =  combineReducers({CONTACT,USCONTACT,routerReducer});
const IndexReducer = (state, action) => {
    // when a logout action is dispatched it will reset redux state
    
  
    return appReducer(state, action);
  };
  export default IndexReducer;


