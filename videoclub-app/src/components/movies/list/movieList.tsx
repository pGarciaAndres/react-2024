import React from 'react'
import {
  Movie as MovieModel,
  MoviePage,
  MovieParams
} from '@/components/movies/model/movie.model'
import { Movie } from '@/components/movies/movie/movie'
import styles from './movieList.module.scss'

type Props = {
  moviePageList: MoviePage[]
}

export const MovieList: React.FC<MovieParams> = (props: Props) => {
  const { moviePageList } = props

  if (!moviePageList || moviePageList[0].movies.length === 0) {
    return <p>No movies found.</p>
  }

  return (
    <ul className={styles.movieList}>
      {moviePageList.map((group: MoviePage, i: number) => (
        <React.Fragment key={i}>
          {group.movies.map((movie: MovieModel) => (
            <Movie movie={movie} />
          ))}
        </React.Fragment>
      ))}
    </ul>
  )
}
