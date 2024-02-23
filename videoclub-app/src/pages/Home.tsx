import { Movies } from '@/components/movies/movies'
import { Search } from '@/components/search/search'
import React from 'react'

export const Home: React.FC = () => {
  return (
    <>
      <Search />
      <Movies />
    </>
  )
}
