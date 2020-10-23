import { combineReducers } from 'redux';
import searchMovieReducer from './searchMovieReducer';
import movieListReducer from './movieListReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
    movies: searchMovieReducer,
    movieList: movieListReducer,
    firebase: firebaseReducer,
    firestoreMovies: firestoreReducer,
})

