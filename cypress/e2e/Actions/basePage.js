class BasePage {
  visit(input) {
    cy.visit(input, { delay: 1000 });
  } // visit a link

  prioElement(parent, common) {
    cy.get(parent).within(() => {
      cy.get(common).click(); // Targets the first instance within this parent
    });
  }

  clickButton(button) {
    cy.get(button).should("exist").click({ force: true }, { delay: 10 });
  } //click button with check

  findElement(element) {
    cy.find(element);
  }
  enterFieldDetails(element, value) {
    cy.get(element).should("exist").type(value, { delay: 10 });
  }

  iframeLoad(iframe) {
    cy.getIframeBody(iframe).should("exist");
  }

  waiting() {
    cy.get(".waiting").should("not.exist");
  } //for waiting in between pages

  radioButtonChecked(radioButton) {
    cy.get(radioButton).should("be.checked");
  }

  failedPayments() {
      cy.get("input[type='checkbox']").check({ force: true });
    cy.get('button[type="submit"]')
      .invoke("css", "pointer-events", "auto")
      .click();
    cy.contains("Credit Card payment failed").should("be.visible");
  }
}

export default BasePage;
