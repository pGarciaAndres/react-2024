import React, { PropsWithChildren } from 'react'
import { Context } from '@/core/context'

export const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = React.useState('')

  return (
    <Context.Provider
      value={{
        search,
        setSearch
      }}
    >
      {children}
    </Context.Provider>
  )
}
