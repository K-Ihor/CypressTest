class RegistrationPage {
  private firstNameInput = '#firstName';
  private lastNameInput = '#lastName';
  private emailInput = '#userEmail';
  private genderMaleRadio = '#gender-radio-1';
  private genderFemaleRadio = '#gender-radio-2';
  private genderOtherRadio = '#gender-radio-3';
  private mobileInput = '#userNumber';
  private dobInput = '#dateOfBirthInput';
  private subjectsInput = '#subjectsInput';
  private hobbiesSports = '#hobbies-checkbox-1';
  private hobbiesReading = '#hobbies-checkbox-2';
  private hobbiesMusic = '#hobbies-checkbox-3';
  private currentAddressInput = '#currentAddress';
  private stateDropdown = '#state';
  private cityDropdown = '#city';
  private submitButton = '#submit';
  private toolsQALogo = 'header > a > img';

  getToolsQALogo() {
      return this.toolsQALogo;
  }

  enterFirstName(firstName: string) {
      cy.get(this.firstNameInput)
          .should('be.visible')
          .scrollIntoView()
          .type(firstName);
  }

  enterLastName(lastName: string) {
      cy.get(this.lastNameInput)
          .should('be.visible')
          .type(lastName);
  }

  enterEmail(email: string) {
      cy.get(this.emailInput)
          .should('be.visible')
          .type(email);
  }

  selectGender(gender: string) {
      const genderSelector = gender === 'Male' ? this.genderMaleRadio
          : gender === 'Female' ? this.genderFemaleRadio
              : this.genderOtherRadio;

      cy.get(genderSelector)
          .should('exist')
          .click({ force: true });
  }

  enterMobileNumber(mobile: string) {
      cy.get(this.mobileInput)
          .should('be.visible')
          .type(mobile);
  }

  selectDateOfBirth(dob: string) {
      cy.get(this.dobInput)
          .should('be.visible')
          .type(`{selectall}${dob}{enter}`);
  }

  enterSubjects(subjects: string[]) {
      subjects.forEach(subject => {
          cy.get(this.subjectsInput)
              .should('be.visible')
              .type(`${subject}{enter}`);
      });
  }

  selectHobbies(hobbies: string[]) {
      const hobbiesSelectors: Record<string, string> = {
          'Sports': this.hobbiesSports,
          'Reading': this.hobbiesReading,
          'Music': this.hobbiesMusic
      };

      hobbies.forEach(hobby => {
          if (hobbiesSelectors[hobby]) {
              cy.get(hobbiesSelectors[hobby])
                  .should('exist')
                  .check({ force: true });
          }
      });
  }

  enterCurrentAddress(address: string) {
      cy.get(this.currentAddressInput)
          .should('be.visible')
          .type(address);
  }

  selectStateAndCity(state: string, city: string) {
      cy.get(this.stateDropdown)
          .should('be.visible')
          .type(`${state}{enter}`);
      cy.get(this.cityDropdown)
          .should('be.visible')
          .type(`${city}{enter}`);
  }

  submitForm() {
      cy.get(this.submitButton)
          .should('be.visible')
          .scrollIntoView()
          .click();
  }
}

export default new RegistrationPage();