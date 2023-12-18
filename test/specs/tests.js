const LoginPage = require(".././pageobjects/LoginPage");
const CartPage = require(".././pageobjects/CartPage");
const CheckOutPage = require("../pageobjects/CheckOutPage");

describe("Mobile app testing:", () => {
  let login, cart, checkout;

  before(async () => {
    login = new LoginPage();
    cart = new CartPage();
    checkout = new CheckOutPage();
  });

  it("should fail to login with wrong username and password", async () => {
    await login.loginFailed();
  });

  it("should success to login with correct username and password", async () => {
    await login.loginSuccess();
  });

  it("should add a product to cart", async () => {
    await cart.addToCart();
  });

  it("should check if product already added to cart", async () => {
    await cart.checkCart();
  });

  it("should fill user's data informations", async () => {
    await checkout.checkOutInfo();
  });

  it("should display the product overview and successfully complete the checkout process", async () => {
    await checkout.finishCheckout();
  });
});
