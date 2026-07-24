describe('Verify Important UI Elements', () => {

  beforeEach(() => {
    cy.visit('https://personal-profile-rho-six.vercel.app/');
    cy.wait(2000); // Wait for animations to complete
  });

  it('Verify important UI elements', () => {

    // Profile image
    cy.get('img', { timeout: 10000 })
      .first()
      .should('exist');

    // Main heading
    cy.get('h1').should('be.visible');

    // Skills section
    cy.contains('Skills & Toolbox').should('be.visible');

    // Contact section
    cy.contains("Let's Connect").should('be.visible');

    // Screenshot
        cy.screenshot("ui-elements");

  });

});