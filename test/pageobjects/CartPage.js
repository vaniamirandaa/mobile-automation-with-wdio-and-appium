const user = require("../data/user.json");
const assert = require("assert");

class CartPage {
  constructor() {
    this.product = '//android.widget.TextView[@content-desc="test-Item title" and @text="Sauce Labs Backpack"]';
    this.cartIcon = '//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView';
    this.cartAdd = '//android.widget.TextView[@text="ADD TO CART"]';
    this.cartRemove = '//android.widget.TextView[@text="REMOVE"]';
    this.assertMessages = '//android.widget.TextView[@text="YOUR CART"]';
    this.checkoutButton = "~test-CHECKOUT";
  }

  async addToCart() {
    const product = await $(this.product);
    await product.waitForDisplayed();
    await product.isDisplayed(true);

    const add = await $(this.cartAdd);
    await add.click();

    const messages = await $(this.cartRemove).getText();
    assert.equal(messages, "REMOVE");
  }

  async removeFromCart() {
    const product = await $(this.product);
    await product.isDisplayed(true);

    const remove = await $(this.cartRemove);
    await remove.click();

    const messages = await $(this.cartAdd).getText();
    assert.equal(messages, "ADD TO CART");
  }

  async checkCart() {
    const icon = await $(this.cartIcon);
    await icon.click();

    const assertion = await $(this.assertMessages).getText();
    assert.equal(assertion, "YOUR CART");

    await $(this.checkoutButton).click();
  }
}

module.exports = CartPage;
