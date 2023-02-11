import { Movie } from '@/typings'
import React from 'react'
import MovieItem from './Movie'

interface Props {
  movies: Movie[]
}

function MainContent({ movies }: Props) {
  return (
    <div className="content">
      <h2 className="content__heading">Now Playing in Cinema</h2>
      <div id="movies" className="movies">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MainContent
