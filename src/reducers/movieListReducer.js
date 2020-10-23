
import {
    // CREATE_LIST,
    // FETCH_MOVIES,
    // FETCH_MOVIE,
    SAVED_MOVIES,
    // DELETE_MOVIE,
    // EDIT_LIST,
    SAVED_MOVIES_ERROR
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case SAVED_MOVIES:
            return [...state, action.payload];
        case SAVED_MOVIES_ERROR:
            console.log('create project error', action.payload)
        default:
            return state;
    }
}