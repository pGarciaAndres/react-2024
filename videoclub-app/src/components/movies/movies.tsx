import React from 'react'
import { useSearch } from '@/components/search/hooks/useSearch'
import { MovieList } from '@/components/movies/list/movieList'
import styles from './movies.module.scss'

export const Movies: React.FC = () => {
  const { isLoading, isError, data, fetchNextPage } = useSearch()
  let hasMoreElements = false

  if (data) {
    const lastElement = data.pages[data.pages.length - 1]
    hasMoreElements = lastElement.totalPages > lastElement.page
  }

  if (isError) {
    return <div>Unable to load movies</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.container}>
      {data && <MovieList movies={data.pages} />}
      {hasMoreElements && (
        <button
          className={styles.loadMoreButton}
          onClick={() => fetchNextPage()}
        >
          Load more
        </button>
      )}
    </div>
  )
}
