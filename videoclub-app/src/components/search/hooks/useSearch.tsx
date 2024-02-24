import React from 'react'
import { Context } from '@/core/context'
import { useInfiniteQuery } from '@tanstack/react-query'
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

  const searchMovies = async ({ pageParam = 0 }) => {
    const data = await getMovies(search, pageParam)
    const result = {
      page: data.page,
      movies: mapMoviesAPItoMovie(data.results),
      totalPages: data.total_pages
    }

    return result
  }

  const { data, isLoading, isError, fetchNextPage } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', search],
    queryFn: searchMovies,
    getNextPageParam: (lastPage) => lastPage && lastPage.page + 1
  })

  return {
    data,
    isLoading,
    isError,
    fetchNextPage
  }
}
