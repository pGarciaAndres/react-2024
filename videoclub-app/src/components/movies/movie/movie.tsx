import { Link } from 'react-router-dom'
import { routes } from '@/core/router'
import { Movie as MovieModel } from '@/components/movies/model/movie.model'
import imageNotFound from '@/assets/img-not-found.png'
import styles from './movie.module.css'

type Props = {
  movie: MovieModel
}
export const Movie: React.FC<Props> = (props: Props) => {
  const { movie } = props
  return (
    <li className={styles.movieItem} key={movie.id}>
      <h3>{movie.title}</h3>
      <Link to={routes.movie(movie.id)}>
        <div className={styles.posterContainer}>
          <img
            src={movie.poster ? movie.poster : imageNotFound}
            alt={movie.title}
          />
        </div>
      </Link>
    </li>
  )
}
