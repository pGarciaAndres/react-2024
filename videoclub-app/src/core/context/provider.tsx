import React, { PropsWithChildren } from 'react'
import { Context } from '@/core/context'

export const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = React.useState('')
  const [currentPage, setCurrentPage] = React.useState(1)

  return (
    <Context.Provider
      value={{
        search,
        currentPage,
        setSearch,
        setCurrentPage
      }}
    >
      {children}
    </Context.Provider>
  )
}
