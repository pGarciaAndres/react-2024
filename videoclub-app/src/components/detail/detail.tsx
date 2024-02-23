import ReplyIcon from '@mui/icons-material/Reply'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import { routes } from '@/core/router'
import { useDetail } from './hooks/useDetail'
import styles from './detail.module.scss'

type Props = {
  id: string
}

export const Detail = (props: Props) => {
  const { id } = props
  const { detail } = useDetail(id)
  const navigate = useNavigate()

  if (!detail) {
    return <div className={styles.container}>Loading...</div>
  }

  return (
    <div className={styles.container}>
      <img className={styles.poster} src={detail.poster} alt={detail.title} />
      <h1>{detail.title}</h1>
      <div className={styles.buttonsContainer}>
        <button
          className={styles.backButton}
          onClick={() => navigate(routes.home)}
        >
          <ReplyIcon />
          Back
        </button>
        <button className={styles.favButton}>
          <FavoriteBorderIcon />
          {/* <FavoriteIcon /> */}
          Add to favorites
        </button>
        <button className={styles.addButton}>
          <AddIcon />
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
