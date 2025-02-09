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
  
    enterFirstName(firstName: string) {
      cy.get(this.firstNameInput)
        .scrollIntoView()
        .wait(1000)
        .type(firstName);
    }
  
    enterLastName(lastName: string) {
      cy.get(this.lastNameInput)
        .wait(1000)
        .type(lastName);
    }
  
    enterEmail(email: string) {
      cy.get(this.emailInput)
        .wait(1000)
        .type(email);
    }
  
    selectGender(gender: string) {
      if (gender === 'Male') {
        cy.get(this.genderMaleRadio)
          .wait(1000)
          .click({ force: true });
      } else if (gender === 'Female') {
        cy.get(this.genderFemaleRadio)
          .wait(1000)
          .click({ force: true });
      } else {
        cy.get(this.genderOtherRadio)
          .wait(1000)
          .click({ force: true });
      }
    }
  
    enterMobileNumber(mobile: string) {
      cy.get(this.mobileInput)
        .wait(1000)
        .type(mobile);
    }
  
    selectDateOfBirth(dob: string) {
      cy.get(this.dobInput)
        .wait(1000)
        .type(`{selectall}${dob}{enter}`);
    }
  
    enterSubjects(subjects: string[]) {
      subjects.forEach(subject => {
        cy.get(this.subjectsInput)
          .scrollIntoView()
          .wait(1000)
          .type(`${subject}{enter}`);
      });
    }
  
    selectHobbies(hobbies: string[]) {
      hobbies.forEach(hobby => {
        if (hobby === 'Sports') {
          cy.get(this.hobbiesSports)
            .wait(1000)
            .check({ force: true });
        } else if (hobby === 'Reading') {
          cy.get(this.hobbiesReading)
            .wait(1000)
            .check({ force: true });
        } else if (hobby === 'Music') {
          cy.get(this.hobbiesMusic)
            .wait(1000)
            .check({ force: true });
        }
      });
    }
  
    enterCurrentAddress(address: string) {
      cy.get(this.currentAddressInput)
        .wait(1000)
        .type(address);
    }
  
    selectStateAndCity(state: string, city: string) {
      cy.get(this.stateDropdown)
        .wait(1000)
        .type(`${state}{enter}`);
      cy.get(this.cityDropdown)
        .wait(1000)
        .type(`${city}{enter}`);
    }
  
    submitForm() {
      cy.get(this.submitButton)
        .scrollIntoView()
        .wait(1000)
        .click();
    }
  }
  
  export default new RegistrationPage();
  