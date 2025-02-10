import RegistrationPage from '../pages/RegistrationPage';

describe('User Registration Form Test', () => {
  beforeEach(() => {
    // @ts-ignore
    cy.navigateToHomePage();
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
 

      cy.get('.modal-content').should('be.visible').within(() => {
        const expectedFields = [
          user.firstName,
          user.lastName,
          user.email,
          user.gender,
          user.mobile,
          user.dateOfBirth,
          user.address,
          user.state,
          user.city
        ];

        cy.get('.modal-body').should(($modal) => {
          expectedFields.forEach(field => {
            expect($modal.text()).to.include(field);
          });
        });
      });


    });
  });
});
