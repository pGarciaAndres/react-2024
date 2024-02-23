import React from 'react'
import { useSearch } from '@/components/search/hooks/useSearch'
import { MovieList } from '@/components/movies/list/movieList'
import styles from './movies.module.scss'

export const Movies: React.FC = () => {
  const { isLoading, isError, movies, loadMore } = useSearch()

  if (isError) {
    return <div>Unable to load movies</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <MovieList movies={movies} />
      <button className={styles.loadMoreButton} onClick={loadMore}>
        Load more
      </button>
    </div>
  )
}
