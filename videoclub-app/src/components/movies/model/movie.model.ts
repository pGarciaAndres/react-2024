export type MovieParams = {
  moviePageList: MoviePage[]
}

export type MoviePage = {
  page: number
  movies: Movie[]
  totalPages: number
}

export interface Movie {
  id: string
  title: string
  poster: string
}
