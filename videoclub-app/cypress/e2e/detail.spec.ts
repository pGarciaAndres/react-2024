describe('Detail specs', () => {
  it('visit the detail page of a movie located at /movie/id', () => {
    // Arrange
    // Act
    cy.visit('/movie/1072790')
  })

  it('should add movie to favorites when button ADD TO FAVORITES is clicked', () => {
    // Arrange
    // Act
    cy.visit('/movie/1072790')
    cy.findByRole('button', { name: /Add to favorites/i }).click()

    // Assert
    cy.findByRole('button', { name: /Remove from favorites/i }).should('exist')
  })

  it('should remove movie from favorites when button REMOVE FROM FAVORITES is clicked', () => {
    // Arrange
    // Act
    cy.visit('/movie/1072790')
    cy.findByRole('button', { name: /Add to favorites/i }).click()
    cy.findByRole('button', { name: /Remove from favorites/i }).click()

    // Assert
    cy.findByRole('button', { name: /Add to favorites/i }).should('exist')
  })

  it('should go back to the main page when button BACK is clicked', () => {
    // Arrange
    // Act
    cy.visit('/movie/1072790')
    cy.findByRole('button', { name: /Back/i }).click()

    // Assert
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
