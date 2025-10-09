import BasePage from "./basePage";

class validate extends BasePage {
  checkoutPaymentStatus() {
    cy.intercept("POST", "https://api.stripe.com/v1/payment_methods").as(
      "payment"
    );
    cy.wait("@payment").then(({ response }) => {
      expect(response.statusCode).to.not.eq(200);
      expect(response.body.status).to.match(/fail|declined|error/i);
    });
  }
}

export default new validate();
