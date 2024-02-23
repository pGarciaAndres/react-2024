import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Movie, PageNotFound } from '@/pages'
import { switchRoutes } from '.'

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.home} element={<Home />} />
        <Route path={switchRoutes.movie} element={<Movie />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}
