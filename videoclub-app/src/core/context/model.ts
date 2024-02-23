export interface ContextModel {
  search: string
  currentPage: number
  setSearch: (search: string) => void
  setCurrentPage: (page: number) => void
}
