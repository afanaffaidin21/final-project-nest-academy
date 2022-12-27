import * as assert from "@helper/asserts";
import * as element from "@helper/elements";
import * as route from "@helper/route";
import { ROUTES } from "@tests/const/routes";
import * as login from "@tests/data/login.data";
import * as loginPage from "@tests/page/login.page";
import * as transactionPage from "@tests/page/transaction.page";

describe("Transaction History Test", () => {
  beforeEach(() => {
    // hooks code
    route.visit(ROUTES.login);
  });

  it("Verify that the customer is able to view the transaction history", () => {
    //test case code in here
    element.get(loginPage.customerLogin);
    element.select(loginPage.selectField, login.VALID_LOGIN_DATA.selectedCustomer1);
    element.get(loginPage.loginButton);
    element.get(transactionPage.transactionButton);
    assert.shouldContainText(transactionPage.transactionDateTime, "Date-Time");
  });

  it("Verify that the customer is able to filter transaction history based on date-time", () => {
    //test case code in here
    element.get(loginPage.customerLogin);
    element.select(loginPage.selectField, login.VALID_LOGIN_DATA.selectedCustomer1);
    element.get(loginPage.loginButton);
    element.get(transactionPage.transactionButton);
    element.forceGet(transactionPage.dateTimeButton);
  });
});
