import { fireEvent, render, screen } from '@testing-library/react'
import { Detail } from './detail'
import { vi } from 'vitest'

describe('components/detail', () => {
  it('should render detail component with movie details', () => {
    // Arrange
    const mockDetail = {
      id: '123',
      title: 'Test Movie',
      poster: 'test.png',
      rating: 7.5,
      likes: '100',
      year: '2024',
      overview: 'This is a test movie overview'
    }

    const goBackFnMock = vi.fn()

    // Act
    render(<Detail detail={mockDetail} goBack={goBackFnMock} />)

    // Assert
    expect(screen.getByText(mockDetail.title)).toBeInTheDocument()
    expect(screen.getByText(`❤️ ${mockDetail.rating} / 10`)).toBeInTheDocument()
    expect(screen.getByText(`👍 ${mockDetail.likes}`)).toBeInTheDocument()
    expect(screen.getByText(`🗓️ Year: ${mockDetail.year}`)).toBeInTheDocument()
    expect(screen.getByText(mockDetail.overview)).toBeInTheDocument()
  })

  it('should call goBack when back button is clicked', () => {
    // Arrange
    const mockDetail = {
      id: '123',
      title: 'Test Movie',
      poster: 'test.png',
      rating: 7.5,
      likes: '100',
      year: '2024',
      overview: 'This is a test movie overview'
    }

    const goBackFnMock = vi.fn()

    // Act
    render(<Detail detail={mockDetail} goBack={goBackFnMock} />)
    fireEvent.click(screen.getByText('Back'))

    // Assert
    expect(goBackFnMock).toHaveBeenCalled()
  })
})
