import { Link } from 'react-router-dom'
import { Movie } from '@/components/movies/model/movie.model'
import { routes } from '@/core/router'
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
          <Link to={routes.movie(movie.id)}>
            <div className={styles.posterContainer}>
              <img src={movie.poster} alt={movie.title} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p>No movies found.</p>
  )
}
