import { renderHook } from '@testing-library/react'
import { useFavorites } from '.'
import { act } from 'react-dom/test-utils'

describe('components/detail/hooks/useFavorites', () => {
  it('should initialize isFavorite correctly', () => {
    // Arrange
    const id = '123'

    // Act
    const { result } = renderHook(() => useFavorites(id))

    // Assert
    expect(result.current.isFavorite).toBe(false)
  })

  it('should toggle isFavorite to true', () => {
    // Arrange
    const id = '123'

    // Act
    const { result } = renderHook(() => useFavorites(id))
    act(() => {
      result.current.toggleFav()
    })

    // Assert
    expect(result.current.isFavorite).toBe(true)
  })

  it('should toggle isFavorite to false after true', () => {
    // Arrange
    const id = '123'

    // Act
    const { result } = renderHook(() => useFavorites(id))
    act(() => {
      result.current.toggleFav()
      result.current.toggleFav()
    })

    // Assert
    expect(result.current.isFavorite).toBe(false)
  })
})
