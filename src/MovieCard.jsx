import React from 'react'

const MovieCard = ({movie: {Year = "N/A", Poster = 'N/A', Type = "N/A", Title = "Unknown" }}) => {
    return (
        <div className="movie">
            <div className="movie-info">
                <p>{Year}</p>
            </div>
            <div className="movie-image">
                <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title} />
            </div>
            <div className="movie-details">
                <span className="movie-type">{Type}</span>
                <h3 className="movie-title">{Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard