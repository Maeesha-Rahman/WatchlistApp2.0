import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveMovie } from '../actions';

class MovieItem extends Component {

    onMovieSave = () => {
        this.props.saveMovie(this.props.movie);
    }

    render() {
        const { movie } = this.props;

        return (
            <div className="wrapper" >
                <section className="" key={movie.id}>
                    <div className="container">
                        <div className="poster">
                            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`Poster for ${movie.title}.`} />
                        </div>
                        <div className="content">
                            <h3>{movie.title} <span>({movie.release_date})</span></h3>
                            <h4>User Score: {movie.vote_average}/10</h4>
                            <p>{movie.overview}</p>
                            <a href={`https://www.themoviedb.org/movie/${movie.id}`} rel="noopener noreferrer" target="_blank">More Info</a>
                            <button onClick={this.onMovieSave}>Save Movie</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        movieList: state.movieList
    }
}

export default connect(mapStateToProps, { saveMovie })(MovieItem);