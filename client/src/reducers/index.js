import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import projectsReducer from './projectsReducer';
import authReducer from './authReducer';
import selectedProjectReducer from './selectedProjectReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectsReducer,
    form: formReducer,
    selected_project:selectedProjectReducer
});

export default rootReducer;
