describe('Feedback Test', () => {
  before(function () {
    cy.visit('http://zero.webappsecurity.com/index.html');

    cy.contains('Feedback').click();
  });

  it('should load feedback form', () => {
    cy.get('form').should('be.visible');
  });

  it('should fill feedback form', () => {
    cy.get('#name').type('Name');

    cy.get('#email').type('email@email.com');

    cy.get('#subject').type('Just subject');

    cy.get('#comment').type('Just my comment');
  });

  it('should submit feedback form', () => {
    cy.get('.btn-signin').click();
  });

  it('should display feedback message', () => {
    cy.url().should('include', 'sendFeedback.html');

    cy.get('#feedback-title').contains('Feedback');
  });
});
