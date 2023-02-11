import Footer from '@/components/Footer'
import MainHeader from '@/components/Header'
import MovieDetail from '@/components/MovieDetail'
import { AppContext } from '@/context/movie-context'
import { Movie } from '@/typings'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

function Detail() {
  const [movie, setmovie] = useState({} as Movie)
  const router = useRouter()
  console.log(router.query.movieId)
  const movies = useContext(AppContext)

  if (!movies) {
    throw new Error('Movies is undefined')
  }

  useEffect(() => {
    const movie =
      movies.movies.find(
        (movie) => movie.id.toString() === router.query.movieId
      ) ?? ({} as Movie)
    setmovie(movie)
  }, [movies, router.query.movieId])

  return (
    <div>
      <Head>
        <title>Detail Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <main>
        <MovieDetail movie={movie} />
      </main>
      <Footer />
    </div>
  )
}

export default Detail
