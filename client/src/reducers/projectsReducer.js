import { FETCH_PROJECTS, DELETE_PROJECT} from '../actions/types';

export default function (state={}, action){
    switch(action.type){
        case FETCH_PROJECTS:
            //console.log('reducer return ', action.payload.data);
            return action.payload.data  ;
        case DELETE_PROJECT:
            console.log('DELETE_PROJECT', state);
            console.log('DELETE_PROJECT id', action.id);
            return   state.filter(project => project._id !== action.id  );

        default:
            return state;
    }
}