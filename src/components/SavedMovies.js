import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class SavedMovies extends Component {


    render() {

        return (
            <section className="savedMoviesComponent">
                <h2>Your Watchlist</h2>
            </section>
        );
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        movies: state.firestoreMovies.data.movies
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'movies' }
    ])
)(SavedMovies);