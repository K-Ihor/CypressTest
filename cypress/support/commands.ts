import RegistrationPage from "../pages/RegistrationPage";

// @ts-ignore
Cypress.Commands.add("navigateToHomePage", () => {
    cy.visit(Cypress.env("ENV"));
    cy.log("Navigating to Home Page");
    cy.get(RegistrationPage.getToolsQALogo(), { timeout: 10000 })
        .should('be.visible');
});