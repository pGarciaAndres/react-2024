import React from 'react'
import {
  MdOutlineArrowBackIosNew,
  MdOutlineStarBorder,
  MdStar,
  MdAdd
} from 'react-icons/md'
import { routes } from '@/core/router'
import { useNavigate } from 'react-router-dom'
import { MovieList } from '@/components/movies/list/movieList'
import { useSearch } from '@/components/search/hooks/useSearch'
import { Context } from '@/core/context'
import { useFavorites, useDetail } from './hooks'
import styles from './detail.module.scss'

type Props = {
  id: string
}

export const Detail: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate()
  const { id } = props
  const { detail } = useDetail(id)
  const { isFavorite, toggleFav } = useFavorites(id)
  const { search, setSearch } = React.useContext(Context)
  const [input] = React.useState<string>(search)

  React.useEffect(() => {
    if (!detail) return
    const relatedWord = detail.title.split(' ')[0]
    setSearch(relatedWord)
  })

  const { movies } = useSearch()

  const goBack = () => {
    setSearch(input)
    navigate(routes.home)
  }

  if (!detail) {
    return <div className={styles.container}>Loading...</div>
  }

  return (
    <>
      <div className={styles.container}>
        <img className={styles.poster} src={detail.poster} alt={detail.title} />
        <h1>{detail.title}</h1>
        <div className={styles.buttonsContainer}>
          <button className={styles.backButton} onClick={goBack}>
            <MdOutlineArrowBackIosNew size={25} />
            Back
          </button>
          <button
            className={isFavorite ? styles.favButton : styles.noFavButton}
            onClick={toggleFav}
          >
            {isFavorite ? (
              <MdStar size={25} />
            ) : (
              <MdOutlineStarBorder size={25} />
            )}
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </button>
          <button className={styles.addButton}>
            <MdAdd size={25} />
          </button>
        </div>
        <div className={styles.info}>
          <span>{`❤️ ${detail.rating} / 10`}</span>
          <span>{`👍 ${detail.likes}`}</span>
          <span>{`🗓️ Year: ${detail.year}`}</span>
        </div>
        <p>{detail.overview}</p>
      </div>
      <div className={styles.relatedMovies}>
        <MovieList movies={movies} />
      </div>
    </>
  )
}
