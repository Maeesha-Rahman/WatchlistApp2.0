
import {
    // CREATE_LIST,
    FETCH_MOVIES,
    // FETCH_MOVIE,
    // SAVED_MOVIES,
    // DELETE_MOVIE,
    // EDIT_LIST
} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return [...state, action.payload];
        default:
            return state;
    }
}