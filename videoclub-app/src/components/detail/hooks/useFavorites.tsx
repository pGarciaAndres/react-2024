import React from 'react'
import { getFavoriteMovies } from '@/components/detail/utils/utils'

export const useFavorites = (id: string) => {
  const favorites = getFavoriteMovies()
  const [isFavorite, setIsFavorite] = React.useState(favorites.includes(id))

  React.useEffect(() => {
    const favorites = getFavoriteMovies()
    const newFavorites = favorites.includes(id)
    setIsFavorite(newFavorites)
  }, [id])

  const toggleFav = () => {
    setIsFavorite(!isFavorite)
    const newFavorites = isFavorite
      ? favorites.filter((fav) => fav !== id).join(',')
      : [...favorites, id].join(',')

    localStorage.setItem('favMovies', newFavorites)
  }

  return { isFavorite, toggleFav }
}
