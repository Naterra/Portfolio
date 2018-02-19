import { FETCH_PROJECT, SELECT_PROJECT } from '../actions/types';

export default function (state={}, action){
    switch(action.type){
        case SELECT_PROJECT:
            return action.payload;
        case FETCH_PROJECT:
            return action.payload.data;
        default:
            return state;
    }
}