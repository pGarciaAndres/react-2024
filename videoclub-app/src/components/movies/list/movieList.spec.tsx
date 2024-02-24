import { render, screen } from '@testing-library/react'
import { MovieList } from './movieList'
import { BrowserRouter } from 'react-router-dom'

describe('components/movies/list/movieList', () => {
  it('should render movie list component with movies', () => {
    // Arrange
    const mockMovieListProps = [
      {
        page: 1,
        movies: [
          {
            id: '123',
            title: 'Test Movie 1',
            poster: 'test1.png',
            rating: 7.5,
            likes: '100',
            year: '2024',
            overview: 'This is a test movie overview'
          },
          {
            id: '456',
            title: 'Test Movie 2',
            poster: 'test2.png',
            rating: 7.5,
            likes: '100',
            year: '2024',
            overview: 'This is a test movie overview'
          }
        ],
        totalPages: 1
      }
    ]

    // Act
    render(
      <BrowserRouter>
        <MovieList moviePageList={mockMovieListProps} />
      </BrowserRouter>
    )

    // Assert
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it('should render movie list component with no movies', () => {
    // Arrange
    const mockMovieListProps = [
      {
        page: 1,
        movies: [],
        totalPages: 1
      }
    ]

    // Act
    render(
      <BrowserRouter>
        <MovieList moviePageList={mockMovieListProps} />
      </BrowserRouter>
    )

    // Assert
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
    expect(screen.getByText('No movies found.')).toBeInTheDocument()
  })
})
