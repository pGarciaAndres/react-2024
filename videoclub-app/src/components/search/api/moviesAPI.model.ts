export interface APIResponse {
  page: number
  results: MovieAPI[]
  total_pages: number
}

export interface MovieAPI {
  id: string
  title: string
  poster_path: string
}
