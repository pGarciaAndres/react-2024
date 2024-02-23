import React from 'react'
import { DetailAPI } from '../api/detailAPI.model'
import { getDetail } from '../api/detailAPI'
import { Detail } from '../model/detail.model'

export const useDetail = (id: string) => {
  const [detail, setDetail] = React.useState<Detail>()

  const mapDetailAPIToDetail = (detail: DetailAPI): Detail => {
    return {
      id: detail.id,
      title: detail.title,
      overview: detail.overview,
      likes: (Math.round(detail.popularity * 10) / 10).toString(),
      rating: Math.round(detail.vote_average * 10) / 10,
      year: detail.release_date
        ? new Date(detail.release_date).getFullYear().toString()
        : 'Unknown year',
      poster: detail.poster_path
        ? `https://image.tmdb.org/t/p/w500${detail.poster_path}`
        : ''
    }
  }

  React.useEffect(() => {
    getDetail(id).then((result) => {
      if (!result) return
      setDetail(mapDetailAPIToDetail(result))
    })
  }, [id])

  return {
    detail
  }
}
