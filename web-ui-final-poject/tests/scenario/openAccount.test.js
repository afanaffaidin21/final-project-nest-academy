import * as assert from "@helper/asserts";
import * as element from "@helper/elements";
import * as route from "@helper/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/page/login.page";
import * as accountPage from "@tests/page/openAccount.page";
import * as account from "@tests/data/openAccount.data";

describe("Open Account", () => {
  beforeEach(() => {
    // hooks code
    route.visit(ROUTES.login);
  });

  it("Verify that the bank manager is able to open account with valid data", () => {
    //test case code in here
    element.get(loginPage.bankManagerLogin);
    element.get(accountPage.openAccountButton);
    element.select(accountPage.selectAccountName, account.VALID_ACCOUNT_DATA.selectedAccount);
    element.select(accountPage.selectCurrency, account.VALID_ACCOUNT_DATA.selectedCurrency);
    element.get(accountPage.processButton);

    assert.verifyAlertWindow("Account created successfully with account Number :1016");
  });
});
