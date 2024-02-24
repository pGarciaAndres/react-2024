import React from 'react'
import { DetailContainer } from '@/components/detail/detailContainer'
import { useParams } from 'react-router-dom'
import { MovieLayout } from '@/layout/movieLayout'

export const MovieDetail: React.FC = () => {
  const { id = '' } = useParams()

  return (
    <MovieLayout>
      <DetailContainer id={id} />
    </MovieLayout>
  )
}
