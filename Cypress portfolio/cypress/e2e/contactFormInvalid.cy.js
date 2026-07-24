describe("Invalid Contact Form", () => {

    beforeEach(() => {
        cy.visit("https://personal-profile-rho-six.vercel.app/");
    });

    it("Verify invalid form validation", () => {

        // Enter invalid email
        cy.get("#email").type("abc");

        // Click Submit button
        cy.get('button[type="submit"]').click();

        // Verify email field is invalid
        cy.get("#email").then(($email) => {
            expect($email[0].checkValidity()).to.equal(false);
        });

        // Screenshot
        cy.screenshot("contact-form-invalid");

    });

});