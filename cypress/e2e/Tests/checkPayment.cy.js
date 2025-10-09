import newPlan from "../../e2e/Actions/creatingNewPlan";
import siteNavi from "../../e2e/Actions/goingToSite";
import customerDetails from "../../e2e/Actions/customerDetails";
import paymentForm from "../../e2e/Actions/payment";

describe("Amaysim Plan Flow", () => {
  it("Cheking Payment Status", () => {
    siteNavi.goToMainSite().goToPlans().goTo7DayPlan();
    newPlan.chooseNewNum().validatePhoneNumSim().checkout();
    customerDetails.newCustomer();
    paymentForm.cardPayment();
  });
});
