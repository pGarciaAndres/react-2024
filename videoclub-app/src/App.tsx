import { QueryClientProvider } from '@tanstack/react-query'
import { ContextProvider } from '@/core/context'
import { queryClient } from '@/core/react-query/queryClient'
import { RouterComponent } from '@/core/router'
import './App.scss'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <RouterComponent />
      </ContextProvider>
    </QueryClientProvider>
  )
}

export default App
