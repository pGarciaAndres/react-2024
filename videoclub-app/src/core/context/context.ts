import React from 'react'
import { ContextModel } from '@/core/context'

export const Context = React.createContext<ContextModel>({
  search: '',
  setSearch: () => {}
})
