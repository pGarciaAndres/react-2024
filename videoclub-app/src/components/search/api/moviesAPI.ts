import { MovieAPI } from './moviesAPI.model'

export const getMovies = async (
  search: string,
  currentPage: number
): Promise<MovieAPI[]> => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const url = !search
    ? `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${currentPage}`
    : `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`

  const response = await fetch(url)
  if (!response.ok) {
    return []
  }

  const json = await response.json()
  const result = json.results
  return result
}
