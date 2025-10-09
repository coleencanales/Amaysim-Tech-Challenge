import BasePage from "./basePage";

class paymentForm extends BasePage {
  elements = {
    paymentForm: "#amaysim-stripe-payment-element-form",
    iframeForm: 'iframe[name^="__privateStripeFrame"]',
    cardTab: 'input[id="card-tab"]',
    cardNumber: 'input[id="Field-numberInput"]',
    expiryDate: 'input[id="Field-expiryInput"]',
    codeValid: 'input[id="Field-cvcInput"]',
  };

  cardPayment() {
    this.iframeLoad(this.elements.iframeForm);
    cy.get(this.elements.cardTab).should("exist").click();
  }
}

export default new paymentForm();
