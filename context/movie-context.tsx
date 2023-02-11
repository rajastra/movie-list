import { Movie } from '@/typings'
import request from '@/utils/request'
import React, { useState, useEffect } from 'react'

type Context = {
  movies: Movie[]
}

const AppContext = React.createContext<Context | null>(null)

interface Props {
  children: React.ReactNode
}

const AppProvider = ({ children }: Props) => {
  const [movies, setMovies] = useState([])

  // set to local storage
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies))
  }, [movies])

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies') || '[]')
    if (movies) {
      setMovies(movies)
    }
  }, [])

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(request.fetchTrending)
      const data = await response.json()
      setMovies(data.results)
    }
    getMovies()
    return () => {
      setMovies([])
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        movies,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export { AppContext, AppProvider }
