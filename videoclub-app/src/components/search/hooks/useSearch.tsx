import React from 'react'
import { Context } from '@/core/context'
import { useQuery } from '@tanstack/react-query'
import { getMovies } from '@/components/search/api/moviesAPI'
import { Movie } from '@/components/movies/model/movie.model'
import { MovieAPI } from '@/components/search/api/moviesAPI.model'

export const useSearch = () => {
  const { search } = React.useContext(Context)

  const mapMoviesAPItoMovie = (movies: MovieAPI[]): Movie[] => {
    return movies.map((movie: MovieAPI) => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : ''
    }))
  }

  const searchMovies = async (search: string) => {
    const movies = await getMovies(search)
    return mapMoviesAPItoMovie(movies)
  }

  const {
    data: movies = [],
    refetch,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['movies', search],
    queryFn: () => searchMovies(search),
    enabled: true
  })

  return { movies, refetch, isLoading, isError }
}
