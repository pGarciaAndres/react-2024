import { APIResponse } from './moviesAPI.model'

export const getMovies = async (
  search: string,
  pageParam: number
): Promise<APIResponse> => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const url = !search
    ? `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageParam}`
    : `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&page=${pageParam}`

  const response = await fetch(url)
  if (!response.ok) {
    return {
      page: 0,
      results: [],
      total_pages: 0
    }
  }

  const result = await response.json()
  return result
}
