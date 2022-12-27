import * as assert from "@helper/asserts";
import * as element from "@helper/elements";
import * as route from "@helper/route";
import { ROUTES } from "@tests/const/routes";
import * as login from "@tests/data/login.data";
import * as loginPage from "@tests/page/login.page";
import * as addCustomerPage from "@tests/page/addCustomer.page";

describe("Login Test", () => {
  beforeEach(() => {
    // hooks code
    route.visit(ROUTES.login);
  });

  it("Verify that the customer is able to successfully log in with valid credentials", () => {
    //test case code in here
    element.get(loginPage.customerLogin);
    element.select(loginPage.selectField, login.VALID_LOGIN_DATA.selectedCustomer1);
    element.get(loginPage.loginButton);
    assert.shouldContainText(loginPage.successLogin, " Welcome ");
  });

  it("Verify that the customer is able to view the customer account Information on the credentials page", () => {
    //test case code in here
    element.get(loginPage.customerLogin);
    element.select(loginPage.selectField, login.VALID_LOGIN_DATA.selectedCustomer1);
    element.get(loginPage.loginButton);
    assert.shouldContainText(loginPage.infoAccount, "Account Number : ");
  });

  it("Verify that the customer is able to log out of the application from logout button", () => {
    //test case code in here
    element.get(loginPage.customerLogin);
    element.select(loginPage.selectField, login.VALID_LOGIN_DATA.selectedCustomer1);
    element.get(loginPage.loginButton);
    element.get(loginPage.logoutButton);
    assert.shouldContainText(loginPage.customerNameLabel, "Your Name :");
  });

  it("Verify that the customer is able to log out of the application from home button", () => {
    //test case code in here
    element.get(loginPage.customerLogin);
    element.select(loginPage.selectField, login.VALID_LOGIN_DATA.selectedCustomer1);
    element.get(loginPage.loginButton);
    element.get(loginPage.homeButton);
    assert.shouldContainText(loginPage.customerLogin, "Customer Login");
  });

  it("Verify that the bank manager is able to successfully login", () => {
    //test case code in here
    element.get(loginPage.bankManagerLogin);
    assert.shouldContainText(addCustomerPage.addCustomerButton, "Add Customer");
  });

  it("Verify that the bank manager is able to log out of the application from home button", () => {
    //test case code in here
    element.get(loginPage.bankManagerLogin);
    element.get(loginPage.homeButton);
    assert.shouldContainText(loginPage.bankManagerLogin, "Bank Manager Login");
  });
});
