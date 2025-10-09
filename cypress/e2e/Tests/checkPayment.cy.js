import newPlan from "../../../Actions/creatingNewPlan";
import siteNavi from "../../../Actions/goingToSite";
import customerDetails from "../../../Actions/customerDetails";
import paymentForm from "../../../Actions/payment";
import validate from "../../../Actions/validations";

describe("Amaysim Plan Flow", () => {
  it("Cheking Payment Status", () => {
    siteNavi.goToMainSite().goToPlans().goTo7DayPlan();
    newPlan.chooseNewNum().validatePhoneNumSim().checkout();
    customerDetails.newCustomer();
    paymentForm.cardPayment();
    validate.checkoutPaymentStatus();
  });
});
