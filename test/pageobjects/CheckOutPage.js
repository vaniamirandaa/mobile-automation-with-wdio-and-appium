const assert = require("assert");
const user = require("../data/user.json");

class CheckoutPage {
  constructor() {
    this.continueButton = "~test-CONTINUE";
    this.finishButton = "~test-FINISH";
    this.firstNameElement = "~test-First Name";
    this.lastNameElement = "~test-Last Name";
    this.zipCodeElement = "~test-Zip/Postal Code";
    this.assertOverview = '//android.widget.TextView[@text="CHECKOUT: OVERVIEW"]';
    this.assertComplete = '//android.widget.TextView[@text="CHECKOUT: COMPLETE!"]';
  }

  async checkOutInfo() {
    const firstName = await $(this.firstNameElement);
    await firstName.setValue(user.username);

    const lastName = await $(this.lastNameElement);
    await lastName.setValue(user.password);

    const zipCode = await $(this.zipCodeElement);
    await zipCode.setValue(user.zipCode);

    await $(this.continueButton).click();
  }

  async finishCheckout() {
    const overview = await $(this.assertOverview).getText();
    assert.equal(overview, "CHECKOUT: OVERVIEW");

    await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("FINISH")');

    await $(this.finishButton).click();

    const complete = await $(this.assertComplete).getText();
    assert.equal(complete, "CHECKOUT: COMPLETE!");
  }
}

module.exports = CheckoutPage;
