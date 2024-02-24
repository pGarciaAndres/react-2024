import { QueryClientProvider } from '@tanstack/react-query'
import { ContextProvider } from '@/core/context'
import { queryClient } from '@/core/react-query/queryClient'
import { RouterComponent } from '@/core/router'
import './App.scss'
import React from 'react'

function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <RouterComponent />
        </ContextProvider>
      </QueryClientProvider>
    </React.Fragment>
  )
}

export default App
