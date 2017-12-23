import axios from 'axios';
import * as types  from './types';

//Action Creator

export function fetchUser(id) {
    const request = axios.get(`/auth/current_user`, { id: id });

    return {
        type: types.FETCH_USER,
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

