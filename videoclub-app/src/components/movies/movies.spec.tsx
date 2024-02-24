import { render, screen, waitFor } from '@testing-library/react'
import { Movies } from './movies'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import userEvent from '@testing-library/user-event'

describe('components/movies/movies', () => {
  it('should render movies component', async () => {
    // Arrange
    const mockUseSearch = {
      isLoading: false,
      isError: false,
      data: {
        page: 1,
        movies: [
          {
            id: '123',
            title: 'Test Movie 1',
            poster: 'test1.png'
          }
        ],
        totalPages: 1
      },
      fetchNextPage: vi.fn()
    }

    vi.mock('useSearch', () => mockUseSearch)

    const mockQueryClient = new QueryClient({
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

    // Act
    render(
      <QueryClientProvider client={mockQueryClient}>
        <Movies />
      </QueryClientProvider>
    )

    // Assert
    waitFor(() => {
      expect(screen.getByText('Test Movie 1')).toBeInTheDocument()
    })
  })

  it('should render error message when error is true', async () => {
    // Arrange
    const mockUseSearch = {
      isLoading: false,
      isError: true,
      data: null,
      fetchNextPage: vi.fn()
    }

    vi.mock('useSearch', () => mockUseSearch)

    const mockQueryClient = new QueryClient({
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

    // Act
    render(
      <QueryClientProvider client={mockQueryClient}>
        <Movies />
      </QueryClientProvider>
    )

    // Assert
    waitFor(() => {
      expect(screen.getByText('Unable to load movies')).toBeInTheDocument()
    })
  })

  it('should render loading message when loading is still true', async () => {
    // Arrange
    const mockUseSearch = {
      isLoading: true,
      isError: false,
      data: null,
      fetchNextPage: vi.fn()
    }

    vi.mock('useSearch', () => mockUseSearch)

    const mockQueryClient = new QueryClient({
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

    // Act
    render(
      <QueryClientProvider client={mockQueryClient}>
        <Movies />
      </QueryClientProvider>
    )

    // Assert
    waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument()
    })
  })

  it('should not render load more button when page is the last', async () => {
    // Arrange
    const mockUseSearch = {
      isLoading: false,
      isError: false,
      data: {
        page: 1,
        movies: [
          {
            id: '123',
            title: 'Test Movie 1',
            poster: 'test1.png'
          }
        ],
        totalPages: 1
      },
      fetchNextPage: vi.fn()
    }

    vi.mock('useSearch', () => mockUseSearch)

    const mockQueryClient = new QueryClient({
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

    // Act
    render(
      <QueryClientProvider client={mockQueryClient}>
        <Movies />
      </QueryClientProvider>
    )

    // Assert
    waitFor(() => {
      expect(
        screen.queryByRole('button', { name: /load more/i })
      ).not.toBeInTheDocument()
    })
  })

  it('should call fetchNextPage when next button is clicked', async () => {
    // Arrange
    const mockUseSearch = {
      isLoading: false,
      isError: false,
      data: {
        page: 1,
        movies: [
          {
            id: '123',
            title: 'Test Movie 1',
            poster: 'test1.png'
          }
        ],
        totalPages: 2
      },
      fetchNextPage: vi.fn()
    }

    vi.mock('useSearch', () => mockUseSearch)

    const mockQueryClient = new QueryClient({
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

    // Act
    render(
      <QueryClientProvider client={mockQueryClient}>
        <Movies />
      </QueryClientProvider>
    )

    // Assert
    waitFor(() => {
      const loadMoreButton = screen.getByRole('button', {
        name: /load more/i
      })
      userEvent.click(loadMoreButton)
    })

    waitFor(() => {
      expect(mockUseSearch.fetchNextPage).toHaveBeenCalled()
    })
  })
})
