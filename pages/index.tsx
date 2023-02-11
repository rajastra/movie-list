import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MainContent from '@/components/MainContent'
import { AppContext } from '@/context/movie-context'
import Head from 'next/head'
import { useContext } from 'react'

function Home() {
  // get context movies
  const movies = useContext(AppContext)

  if (!movies) {
    throw new Error('Movies is undefined')
  }
  return (
    <div>
      <Head>
        <title>Movie Catalouge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <MainContent movies={movies?.movies} />
      </main>
      <Footer />
    </div>
  )
}

export default Home
