import { Movie } from '@/typings'
import Link from 'next/link'
import React from 'react'

interface Props {
  movie: Movie
}

function MovieItem({ movie }: Props) {
  return (
    <div className="movie-item">
      <div className="movie-item__header">
        <img
          className="movie-item__header__poster"
          alt={movie.title}
          src={
            movie.backdrop_path
              ? 'https://image.tmdb.org/t/p/w500/' + movie.backdrop_path
              : 'https://picsum.photos/id/666/800/450?grayscale'
          }
        />
        <div className="movie-item__header__rating">
          <p>
            ⭐️
            <span className="movie-item__header__rating__score">
              {movie.vote_average.toFixed(1)}
            </span>
          </p>
        </div>
      </div>
      <div className="movie-item__content">
        <h3>
          <Link
            href={{
              pathname: `${movie.id}`,
            }}
          >
            {movie?.title || movie.original_name}
          </Link>
        </h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieItem
