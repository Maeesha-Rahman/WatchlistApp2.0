// instance of axios 
import themoviedb from '../apis/themoviedb';

import {
    SIGN_IN,
    SIGN_OUT,
    // CREATE_LIST,
    FETCH_MOVIES,
    // FETCH_MOVIE,
    // DELETE_MOVIE,
    // EDIT_LIST
} from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}



export const fetchMovies = (term) => async dispatch => {
    const response = await themoviedb.get('/movie', {
        params: {
            query: term
        }
    });

    console.log(response)

    dispatch({ type: FETCH_MOVIES, payload: response.data.results })
}


