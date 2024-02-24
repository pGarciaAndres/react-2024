import React from 'react'
import {
  MdOutlineArrowBackIosNew,
  MdOutlineStarBorder,
  MdStar,
  MdAdd
} from 'react-icons/md'
import { useFavorites } from './hooks'
import styles from './detail.module.scss'
import { Detail as DetailModel } from './model'

type Props = {
  detail: DetailModel
  goBack: () => void
}

export const Detail: React.FC<Props> = (props: Props) => {
  const { detail, goBack } = props
  const { isFavorite, toggleFav } = useFavorites(detail.id)

  return (
    <div className={styles.container}>
      {detail.poster && (
        <img className={styles.poster} src={detail.poster} alt={detail.title} />
      )}
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
  )
}
