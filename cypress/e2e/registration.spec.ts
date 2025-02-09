import RegistrationPage from '../pages/RegistrationPage';

describe('User Registration Form Test', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it('should register a user with valid data', () => {
    cy.fixture('userData.json').then((user) => {
      RegistrationPage.enterFirstName(user.firstName);
      RegistrationPage.enterLastName(user.lastName);
      RegistrationPage.enterEmail(user.email);
      RegistrationPage.selectGender(user.gender);
      RegistrationPage.enterMobileNumber(user.mobile);
      RegistrationPage.selectDateOfBirth(user.dateOfBirth);
      RegistrationPage.selectHobbies(user.hobbies);
      RegistrationPage.enterCurrentAddress(user.address);
      RegistrationPage.selectStateAndCity(user.state, user.city);
      RegistrationPage.submitForm();
 

      // Проверяем, что открывается модальное окно с введенными данными
      cy.get('.modal-content').should('be.visible');
      cy.wait(1000);
      cy.get('.modal-body').should('contain.text', user.firstName);
      cy.get('.modal-body').should('contain.text', user.lastName);
      cy.get('.modal-body').should('contain.text', user.email);
      cy.get('.modal-body').should('contain.text', user.gender);
      cy.get('.modal-body').should('contain.text', user.mobile);
      cy.get('.modal-body').should('contain.text', user.dateOfBirth);
      cy.get('.modal-body').should('contain.text', user.address);
      cy.get('.modal-body').should('contain.text', user.state);
      cy.get('.modal-body').should('contain.text', user.city);
    });
  });
});
