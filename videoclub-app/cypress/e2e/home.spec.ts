describe('Login specs', () => {
  it('visit the main dashboard page located at /', () => {
    // Arrange
    // Act
    cy.visit('/')
  })

  it('should render a list of movies by default', () => {
    // Arrange
    // Act
    cy.visit('/')

    // Assert
    cy.findByRole('list').should('be.visible')
  })

  it('should put the focus on the search input once the user click on it', () => {
    // Arrange
    // Act
    cy.visit('/')
    cy.findByRole('textbox').click()

    // Assert
    cy.findByRole('textbox').should('be.focused')
  })

  it('should display a new list of movies once the user types on the search input', () => {
    // Arrange
    const searchText = 'Rings'

    // Act
    cy.visit('/')
    cy.findByRole('textbox').as('searchInput')
    cy.get('@searchInput').type(searchText)

    // Assert
    cy.get('@searchInput').should('have.value', searchText)
    cy.findAllByRole('list').should('have.length', 1)
    cy.findAllByRole('listitem').should('have.length', 20)
    cy.findAllByRole('listitem').first().contains(searchText)
  })

  it('should add more movies once the user click on the load more button', () => {
    // Arrange
    const searchText = 'Rings'

    // Act
    cy.visit('/')
    cy.findByRole('textbox').as('searchInput')
    cy.get('@searchInput').type(searchText)
    cy.findByRole('button', { name: /Load more/i }).click()

    // Assert
    cy.findAllByRole('listitem').should('have.length.greaterThan', 20)
  })

  it('should navigate to the detail page once the user click on a movie poster', () => {
    // Arrange
    // Act
    cy.visit('/')

    // Assert
    cy.findAllByRole('listitem').first().click()
    cy.url().should('include', '/movie/')
  })

  it('should search, navigate to detail page and go back, the search text should stay', () => {
    // Arrange
    const searchText = 'Rings'

    // Act
    cy.visit('/')
    cy.findByRole('textbox').as('searchInput')
    cy.get('@searchInput').type('Rings')
    cy.wait(1000).findAllByRole('listitem').first().click()

    // Assert
    cy.findByRole('button', { name: /Back/i }).click()
    cy.get('@searchInput').should('have.value', searchText)
  })
})
