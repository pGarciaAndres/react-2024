import { Movies } from '@/components/movies/movies'
import { Search } from '@/components/search/search'
import { Layout } from '@/layout/layout'
import React from 'react'

export const Home: React.FC = () => {
  return (
    <Layout>
      <Search />
      <Movies />
    </Layout>
  )
}
