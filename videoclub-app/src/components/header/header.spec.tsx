import { render, screen } from '@testing-library/react'
import { Header } from './header'

describe('components/header', () => {
  it('should render header component', () => {
    // Arrange
    // Act
    render(<Header />)
    const image = screen.getByAltText('header image')
    const overlay = screen.getByRole('overlay')

    // Assert
    expect(image).toBeInTheDocument()
    expect(overlay).toBeInTheDocument()
  })
})
