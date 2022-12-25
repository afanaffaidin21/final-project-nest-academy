import * as assert from "@helper/asserts";
import * as element from "@helper/elements";
import * as route from "@helper/route";
import { ROUTES } from "@tests/const/routes";
import * as login from "@tests/data/login.data";
import * as loginPage from "@tests/page/login.page";

describe("Login Test", () => {
  beforeEach(() => {
    // hooks code
    route.visit(ROUTES.login);
  });

  it("Verify that the customer is able to successfully log in with valid credentials", () => {
    //test case code in here
    element.get(loginPage.customerLogin);
    element.select(loginPage.selectField, loginPage.selectedCustomer);
    element.get(loginPage.loginButton);
    assert.shouldContainText(loginPage.successLogin, " Welcome ");
  });
});
