import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MovieDetail from '@/components/MovieDetail'
import { AppContext } from '@/context/movie-context'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

function Detail() {
  const router = useRouter()
  console.log(router.query.movieId)
  const movies = useContext(AppContext)

  if (!movies) {
    throw new Error('Movies is undefined')
  }

  const movie = movies.movies.find(
    (movie) => movie.id.toString() === router.query.movieId
  )

  if (!movie) {
    throw new Error('Movie is undefined')
  }

  return (
    <div>
      <Head>
        <title>Detail Movie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <MovieDetail movie={movie} />
      </main>
      <Footer />
    </div>
  )
}

export default Detail
