import * as assert from "@helper/asserts";
import * as element from "@helper/elements";
import * as route from "@helper/route";
import { ROUTES } from "@tests/const/routes";
import * as login from "@tests/data/login.data";
import * as loginPage from "@tests/page/login.page";
import * as deposit from "@tests/data/deposit.data";
import * as depositPage from "@tests/page/deposit.page";

describe("Deposit Test", () => {
  beforeEach(() => {
    // hooks code
    route.visit(ROUTES.login);
  });

  it("Verify that the customer is able to add deposit with number input", () => {
    //test case code in here
    element.get(loginPage.customerLogin);
    element.select(loginPage.selectField, login.VALID_LOGIN_DATA.selectedCustomer1);
    element.get(loginPage.loginButton);
    element.get(depositPage.depositButton);
    element.fillfield(depositPage.depositField, deposit.DEPOSIT_DATA.nominal);
    element.get(depositPage.depositSubmitButton);
    assert.shouldContainText(depositPage.depositMessage, "Deposit Successful");
  });
});
