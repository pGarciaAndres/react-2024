import { useSearch } from '@/components/search/hooks/useSearch'
import { MovieList } from '@/components/movies/list/movieList'
import styles from './movies.module.scss'

export const Movies = () => {
  const { isLoading, isError, movies } = useSearch()

  if (isError) {
    return <div>Unable to load movies</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <MovieList movies={movies} />
    </div>
  )
}
