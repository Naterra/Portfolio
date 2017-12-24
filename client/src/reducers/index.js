import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import projectsReducer from './projectsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectsReducer,
    form: formReducer
});

export default rootReducer;
