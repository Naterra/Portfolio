import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectReducer
});

export default rootReducer;
