import BasePage from "./basePage";

class siteNavi extends BasePage {
  elements = {
    mainNavi: ".nav-main",
    simPlans: 'a[href="/sim-plans"]',
    sevenDayPlan: 'a[href="/mobile/cart/7-day-10gb"]',
  };

  goToMainSite() {
    this.visit(Cypress.env("shopUrl"));
    this.waiting();
    return this;
  }

  goToPlans() {
    this.prioElement(this.elements.mainNavi, this.elements.simPlans);
    this.waiting();
    return this;
  }

  goTo7DayPlan() {
    this.clickButton(this.elements.sevenDayPlan);
    this.waiting();
    return this;
  }
}

export default new siteNavi();
