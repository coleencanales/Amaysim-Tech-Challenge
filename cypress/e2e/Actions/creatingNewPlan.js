import BasePage from "./basePage";

class newPlan extends BasePage {
  elements = {
    pickNewNum: 'input[data-testid="number-option-1"]',
    physicalSim: 'input[value="USIM"]',
    checkoutBtn: 'a[data-testid="product-checkout-button"]',
  };

  chooseNewNum() {
    this.clickButton(this.elements.pickNewNum);
    return this;
  }

  validatePhoneNumSim() {
    this.radioButtonChecked(this.elements.physicalSim);
    return this;
  }

  checkout() {
    this.clickButton(this.elements.checkoutBtn);
    cy.wait(1000)
    return this;
  }
}

export default new newPlan();
