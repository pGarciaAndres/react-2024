import { Header } from '@/components/header/header'
import { Movies } from '@/components/movies/movies'
import { Search } from '@/components/search/search'
import { Layout } from '@/layout/layout'
import React from 'react'

export const Home: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Search />
      <Movies />
    </Layout>
  )
}
