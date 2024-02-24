import { render, screen } from '@testing-library/react'
import { Movie } from './movie'
import { BrowserRouter } from 'react-router-dom'

describe('components/movies/movie', () => {
  it('should render movie component', () => {
    // Arrange
    const mockMovie = {
      id: '123',
      title: 'Test Movie',
      poster: 'test.png'
    }

    // Act
    render(
      <BrowserRouter>
        <Movie movie={mockMovie} />
      </BrowserRouter>
    )

    // Assert
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', mockMovie.poster)
  })
})
