import { Movie } from '@/components/movies/model/movieModel'
import styles from './movieList.module.scss'

type Props = {
  movies: Movie[]
}
export const MovieList = (props: Props) => {
  const { movies } = props

  return movies?.length > 0 ? (
    <ul className={styles.movieList}>
      {movies.map((movie) => (
        <li className={styles.movie} key={movie.id}>
          <h3>{movie.title}</h3>
          <div className={styles.posterContainer}>
            <img src={movie.poster} alt={movie.title} />
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>No movies found.</p>
  )
}
