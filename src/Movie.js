import React from 'react'
import PropTypes from 'prop-types'

function Movie({id, year, title, summary, poster}) {
    return (
        <div>
            <h1>{id}</h1>
            <h4>{title}</h4>
            <h4>{year}</h4>
            <h4>{summary}</h4>
            <img src={poster}/>
        </div>
    )
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;