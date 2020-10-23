import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieItem from './MovieItem';


class MovieList extends Component {

    renderList() {

        return this.props.movies.map(movieArr => {
            return movieArr.map(movie => {
                return (
                    <MovieItem key={movie.id}
                        movie={movie} />
                )
            })
        })
    }


    render() {
        return (
            <div>
                <h2>Movies</h2>
                <div className="">
                    {this.props.movies.length > 0 ? this.renderList() : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(MovieList);