import React from 'react';

const MovieItem = ({ movie }) => {
    console.log('movie item', movie)
    return (
        <div className="wrapper">
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
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MovieItem;