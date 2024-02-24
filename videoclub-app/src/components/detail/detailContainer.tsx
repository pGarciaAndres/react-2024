import React from 'react'

import { routes } from '@/core/router'
import { useNavigate } from 'react-router-dom'
import { MovieList } from '@/components/movies/list/movieList'
import { useSearch } from '@/components/search/hooks/useSearch'
import { Context } from '@/core/context'
import { useDetail } from './hooks'
import { Detail } from './detail'
import styles from './detail.module.scss'

type Props = {
  id: string
}

export const DetailContainer: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate()
  const { id } = props
  const { detail } = useDetail(id)
  const { data } = useSearch()

  const { search, setSearch } = React.useContext(Context)
  const [input] = React.useState<string>(search)

  React.useEffect(() => {
    if (!detail) return
    const relatedWord = detail.title.split(' ')[0]
    setSearch(relatedWord)
  })

  const goBack = () => {
    setSearch(input)
    navigate(routes.home)
  }

  if (!detail) {
    return <div className={styles.container}>Loading...</div>
  }

  return (
    <>
      <Detail detail={detail} goBack={goBack} />
      {data && (
        <div className={styles.relatedMovies}>
          <h2>We think you'll like this</h2>
          <MovieList moviePageList={data.pages} />
        </div>
      )}
    </>
  )
}
