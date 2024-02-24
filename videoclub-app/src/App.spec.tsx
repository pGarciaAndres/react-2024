import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should render', () => {
    // Arrange
    // Act
    render(<App />)

    // Assert
    expect(
      screen.getByRole('textbox', { name: /search movies/i })
    ).toBeInTheDocument()
  })
})
