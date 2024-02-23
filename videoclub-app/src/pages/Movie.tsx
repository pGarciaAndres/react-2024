import React from 'react'
import { Detail } from '@/components/detail/detail'
import { useParams } from 'react-router-dom'
import { MovieLayout } from '@/layout/movieLayout'

export const Movie: React.FC = () => {
  const { id = '' } = useParams()

  return (
    <MovieLayout>
      <Detail id={id} />
    </MovieLayout>
  )
}
