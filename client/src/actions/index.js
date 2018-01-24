import axios from 'axios';
import * as types  from './types';

//Action Creator

export function fetchUser() {
    const request = axios.get(`/auth/fetch_user`);

    return {
        type: types.FETCH_USER,
        payload:request
    };
}


export function select_project(project) {
    return {
        type: types.SELECT_PROJECT,
        payload:project
    };
}

export function saveProject(values, callback) {
    console.log('ACTION: saveProject', values);

    //values.myfile = values.file[0];
    const config = { headers: { 'content-type': 'multipart/form-data' } };

    const request = axios.post(`/api/save_project`, values, config).then(() => callback());

    return {
        type: types.SAVE_PROJECT,
        payload:request
    };
}

export function delete_project(id){
    console.log('delete_project action', id);
    const config = { headers: { 'content-type': 'application/json' } };
    const request = axios.post('/api/delete_project', {id:id}, config);

    return {
        type: types.DELETE_PROJECT,
        id:id
    };
}

export function fetchProject(id ) {
    const request = axios.get(`/api/get_project/${id}`);

    return {
        type: types.FETCH_PROJECT,
        payload:request
    };
}


export function fetchProjects( ) {
    const request = axios.get(`/api/get_projects`);

    return {
        type: types.FETCH_PROJECTS,
        payload:request
    };
}

// export const fetchUser = () => async dispatch =>{
//         const res = await axios.get('/api/current_user');
//         dispatch({ type: FETCH_USER, payload:res.data });
// };

// export const handleToken = (token) => async dispatch =>{
//     const res = await axios.post('/api/stripe', token);
//     dispatch({ type: FETCH_USER, payload:res.data });
// };

