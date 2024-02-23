export const getFavoriteMovies = (): string[] => {
  const storageFav = localStorage.getItem('favMovies') || ''
  const favorites = storageFav.length > 0 ? storageFav.split(',') : []
  return favorites
}
