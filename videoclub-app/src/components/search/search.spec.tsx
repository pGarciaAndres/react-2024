import { render, screen } from '@testing-library/react'
import { Search } from './search'
import userEvent from '@testing-library/user-event'

describe('components/search', () => {
  it('should render search component', () => {
    // Arrange
    // Act
    render(<Search />)

    // Assert
    expect(screen.getByLabelText('Search movies')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search movies')).toBeInTheDocument()
  })

  it('should not render clear button when input is empty', () => {
    // Arrange
    // Act
    render(<Search />)

    // Assert
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('should render clear button when input is not empty', async () => {
    // Arrange
    // Act
    render(<Search />)
    const input = screen.getByLabelText('Search movies')
    await userEvent.type(input, 'test')

    // Assert
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should clear input when clear button is clicked', async () => {
    // Arrange
    // Act
    render(<Search />)
    const input = screen.getByLabelText('Search movies')
    await userEvent.type(input, 'test')

    // Assert
    expect(input).toHaveValue('test')

    const button = screen.getByRole('button')
    await userEvent.click(button)

    expect(input).toHaveValue('')
  })
})
