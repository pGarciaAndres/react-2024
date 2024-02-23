import { generatePath } from 'react-router-dom'

interface SwitchRoutes {
  home: string
  movie: string
}

export const switchRoutes: SwitchRoutes = {
  home: '/',
  movie: '/movie/:id'
}

interface Routes extends Omit<SwitchRoutes, 'movie'> {
  movie: (id: string) => string
}

export const routes: Routes = {
  ...switchRoutes,
  movie: (id: string) => generatePath(switchRoutes.movie, { id })
}
