import React from 'react'
import { Movie } from '@/typings'

interface Props {
  movie: Movie
}

function MovieDetail({ movie }: Props) {
  return (
    <div className="movie">
      <h2 className="movie__title">{movie.title}</h2>
      <img
        className="movie__poster"
        src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
        alt={movie.title}
      />
      <div className="movie__info">
        <h3>Information</h3>
        <h4>Release Date</h4>
        <p>{movie.release_date}</p>
        <h4>Rating</h4>
        <p>{movie.vote_average}</p>
      </div>
      <div className="movie__overview">
        <h3>Overview</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieDetail
