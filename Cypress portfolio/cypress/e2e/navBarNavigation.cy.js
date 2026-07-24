describe("Navbar Navigation", () => {

    beforeEach(() => {
        cy.visit("https://personal-profile-rho-six.vercel.app/");
    });

    it("Verify navbar navigation", () => {

        // Click on About menu
        cy.contains("About").click();

        // Verify About section is visible
        cy.get("#about").should("be.visible");

        // Screenshot
        cy.screenshot("navbar-navigation");

    });

});