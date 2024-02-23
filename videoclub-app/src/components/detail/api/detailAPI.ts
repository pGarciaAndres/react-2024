import { DetailAPI } from './detailAPI.model'

export const getDetail = async (id: string): Promise<DetailAPI | null> => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`

  const response = await fetch(url)
  if (!response.ok) {
    return null
  }

  const result = await response.json()
  return result
}
