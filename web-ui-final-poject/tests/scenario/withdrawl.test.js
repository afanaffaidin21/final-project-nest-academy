import * as assert from "@helper/asserts";
import * as element from "@helper/elements";
import * as route from "@helper/route";
import { ROUTES } from "@tests/const/routes";
import * as login from "@tests/data/login.data";
import * as loginPage from "@tests/page/login.page";
import * as withdrawl from "@tests/data/withdrawl.data";
import * as withdrawlPage from "@tests/page/withdrawl.page";

describe("Withdrawl Test", () => {
  beforeEach(() => {
    // hooks code
    route.visit(ROUTES.login);
  });

  it("Verify that the customer is able to make withdrawl less than the balance", () => {
    //test case code in here
    element.get(loginPage.customerLogin);
    element.select(loginPage.selectField, login.VALID_LOGIN_DATA.selectedCustomer1);
    element.get(loginPage.loginButton);
    element.get(withdrawlPage.withdrawlButton);
    element.fillfield(withdrawlPage.withdrawlField, withdrawl.WITHDRAWL_DATA.nominal);
    element.get(withdrawlPage.withdrawlSubmitButton);
    assert.shouldContainText(withdrawlPage.withdrawlMessage, "Transaction successful");
  });
});
