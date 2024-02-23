import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: Infinity,
      gcTime: Infinity,
      refetchInterval: 1000 * 60 * 5
    }
  }
})
