const user = require("../data/user.json");
const assert = require("assert");

class LoginPage {
  constructor() {
    this.username = "~test-Username";
    this.password = "~test-Password";
    this.loginButton = "~test-LOGIN";
    this.assertSuccess = '//android.widget.TextView[@text="PRODUCTS"]';
    this.assertFailed = '//android.widget.TextView[@text="Username and password do not match any user in this service."]';
  }

  async login(username, password) {
    //fill the username
    const usernameForm = await $(this.username);
    await usernameForm.setValue(username);

    //fill the password
    const passwordForm = await $(this.password);
    await passwordForm.setValue(password);

    //tap the login button
    await $(this.loginButton).click();
  }

  async loginSuccess() {
    await this.login(user.username, user.password);

    const assertion = await $(this.assertSuccess).getText();
    assert.strictEqual(assertion, "PRODUCTS");
  }

  async loginFailed() {
    await this.login("admin", "password");

    const assertion = await $(this.assertFailed).getText();
    assert.strictEqual(
      assertion,
      "Username and password do not match any user in this service."
    );
  }
}

module.exports = LoginPage;
