import request from '../../client/src/reducers/projectsReducer';
import { FETCH_PROJECTS, DELETE_PROJECT} from '../../client/src/actions/types';


describe('Request Reducer', ()=>{

    it('has a default state', ()=>{

        expect(request(undefined, {type: 'unexpected'})).toEqual({});
    });

    it('can handle FETCH_PROJECTS', ()=>{

        expect(request(undefined, {
            type: FETCH_PROJECTS,
            payload:{data:true}
        })).toEqual({data:true});
    });


});