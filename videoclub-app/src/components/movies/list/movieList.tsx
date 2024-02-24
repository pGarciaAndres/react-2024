import React from 'react'
import {
  Movie as MovieModel,
  MoviePage,
  MoviePageList
} from '@/components/movies/model/movie.model'
import { Movie } from '@/components/movies/movie/movie'
import styles from './movieList.module.scss'

export const MovieList: React.FC<MoviePageList> = (props: MoviePageList) => {
  const { movies } = props

  return movies?.length > 0 ? (
    <ul className={styles.movieList}>
      {movies.map((group: MoviePage, i: number) => (
        <React.Fragment key={i}>
          {group.movies.map((movie: MovieModel) => (
            <Movie movie={movie} />
          ))}
        </React.Fragment>
      ))}
    </ul>
  ) : (
    <p>No movies found.</p>
  )
}
