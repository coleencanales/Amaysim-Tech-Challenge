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
    this.failedPayments();
  }
}

export default new paymentForm();
