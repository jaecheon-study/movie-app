import React from 'react'
import PropTypes from 'prop-types'
import "./movie.css"

function Movie({id, year, title, summary, poster}) {
    return (
      
        <div className="movie">
            <img src={poster}/>
            <div>
                <h4 className="movie_title">{title}</h4>
                <h4 className="movie_year">{year}</h4>
                <p>{summary.slice(0, 180)}...</p>
            </div>
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