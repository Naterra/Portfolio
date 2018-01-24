import { SELECT_PROJECT } from '../actions/types';

export default function (state={}, action){
    switch(action.type){
        case SELECT_PROJECT:
            return action.payload  ;
        default:
            return state;
    }
}