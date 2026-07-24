describe('Valid Contact Form', () => {

  beforeEach(() => {
    cy.visit('https://personal-profile-rho-six.vercel.app/');
  });

  it('Verify contact form with valid data', () => {

    // Fill Name
    cy.get('#name').type('Inara');

    // Fill Email
    cy.get('#email').type('inara@test.com');

    // Fill Message
    cy.get('#message').type('Playwright Testing');

    // Click Submit
    cy.get('button[type="submit"]').click();

    // Positive Assertion
    cy.get('#email').should('have.value', 'inara@test.com');

    // Screenshot
    cy.screenshot('contact-form-valid');

  });

});