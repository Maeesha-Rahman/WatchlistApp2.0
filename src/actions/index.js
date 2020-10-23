// instance of axios 
import themoviedb from '../apis/themoviedb';
// import { firebase } from '../firebase';
import { getFirestore } from 'redux-firestore';

import {
    SIGN_IN,
    SIGN_OUT,
    // CREATE_LIST,
    FETCH_MOVIES,
    // FETCH_MOVIE,
    SAVED_MOVIES,
    // DELETE_MOVIE,
    // EDIT_LIST,
    SAVED_MOVIES_ERROR
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

    dispatch({ type: FETCH_MOVIES, payload: response.data.results })
}

export const saveMovie = movie => dispatch => {
    const firestore = getFirestore();

    firestore.collection('movies').add({
        ...movie
    }).then(() => {
        dispatch({ type: SAVED_MOVIES, payload: movie })
    }).catch(err => {
        dispatch({ type: SAVED_MOVIES_ERROR, payload: err })
    })
}







