describe("Website Load", () => {

    beforeEach(() => {
        cy.visit("https://personal-profile-rho-six.vercel.app/");
    });

    it("Verify website loads and title", () => {

        // Verify page title
        cy.title().should("include", "INARA");

        // Positive assertion
        cy.contains("Home").should("be.visible");

        // Negative assertion
        cy.contains("Login").should("not.exist");

        // Screenshot
        cy.screenshot("website-load");

    });

});