import React, { useState } from 'react';
import { connect } from 'react-redux';
// action 
import { fetchMovies } from '../actions';

const SearchBar = (props) => {

    const [term, setTerm] = useState('');


    const onInputChange = (e) => {
        setTerm(e.target.value)
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        props.fetchMovies(term);
    }


    return (
        <div className="">
            <form onSubmit={onFormSubmit} className="">
                <div className="">
                    <label>Movie Search</label>
                    <input
                        type="text"
                        value={term}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    )

}


export default connect(null, { fetchMovies })(SearchBar);