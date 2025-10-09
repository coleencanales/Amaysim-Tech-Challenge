import BasePage from "./basePage";
import { faker } from "@faker-js/faker";

class customerDetails extends BasePage {
  elements = {
    firstName: 'input[name="firstName"]',
    lastName: 'input[name="lastName"]',
    dateOfBirth: 'input[name="dateOfBirth"]',
    email: 'input[name="email"]',
    password: 'input[name="password"]',
    phone: 'input[name="contactNumber"]',

    address: () =>
      cy
        .get(".react-autosuggest__container")
        .find('input[type="text"]')
        .click()
        .type("Level 6, 17-19 Bridge St, SYDNEY NSW 2000")
        .get("#react-autowhatever-1--item-0")
        .click(),
  };

  newCustomer() {
    const firstName = "Test";
    const lastName = "Test";
    const dateOfBirth = faker.date.birthdate({
      min: 1980,
      max: 2000,
      mode: "year",
    });

    const password = faker.internet.password({ length: 12, memorable: true });
    const phone = "04" + faker.number.int({ min: 10000000, max: 99999999 });

    this.enterFieldDetails(this.elements.firstName, firstName);
    this.enterFieldDetails(this.elements.lastName, lastName);
    this.enterFieldDetails(this.elements.dateOfBirth, "06031998");
    this.enterFieldDetails(this.elements.email, "test@email.com");
    this.enterFieldDetails(this.elements.password, password);
    this.enterFieldDetails(this.elements.phone, phone);
    this.elements.address();
  }
}

export default new customerDetails();
