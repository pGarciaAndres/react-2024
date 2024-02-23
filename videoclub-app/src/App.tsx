import { QueryClientProvider } from '@tanstack/react-query'
import { ContextProvider } from '@/core/context'
import { queryClient } from '@/core/react-query/queryClient'
import { RouterComponent } from '@/core/router'
import { Header } from './components/header/header'
import './App.scss'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Header />
        <RouterComponent />
      </ContextProvider>
    </QueryClientProvider>
  )
}

export default App
