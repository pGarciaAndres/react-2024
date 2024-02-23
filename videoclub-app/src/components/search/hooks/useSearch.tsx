import React from 'react'
import { Context } from '@/core/context'
import { useQuery } from '@tanstack/react-query'
import { getMovies } from '@/components/search/api/moviesAPI'
import { Movie } from '@/components/movies/model/movie.model'
import { MovieAPI } from '@/components/search/api/moviesAPI.model'

export const useSearch = () => {
  const { search, currentPage, setCurrentPage } = React.useContext(Context)

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
    const movies = await getMovies(search, currentPage)
    return mapMoviesAPItoMovie(movies)
  }

  const loadMore = async () => {
    setCurrentPage(currentPage + 1)

    getMovies(search, currentPage + 1).then((res) => {
      const more = mapMoviesAPItoMovie(res)
      movies.push(...more)
    })

    // const more = await getMovies(search, currentPage + 1)
    // const moreMovies = mapMoviesAPItoMovie(more)
    // return [...movies, ...moreMovies]
  }

  // useEffect(() => {
  //   debugger
  //   getMovies(search, currentPage).then((res) => {
  //     const more = mapMoviesAPItoMovie(res)
  //     movies.push(...more)
  //   })
  // }, [currentPage, search])

  const {
    data: movies = [],
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['movies', search],
    queryFn: () => searchMovies(search),
    enabled: true
  })

  return { movies, isLoading, isError, refetch, loadMore }
}
