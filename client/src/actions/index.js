import axios from 'axios';
import * as types  from './types';

//Action Creator

export function fetchUser() {
    const request = axios.get(`/auth/current_user`);

    return {
        type: types.FETCH_USER,
        payload:request
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
