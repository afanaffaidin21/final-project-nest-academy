import * as assert from "@helper/asserts";
import * as element from "@helper/elements";
import * as route from "@helper/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/page/login.page";
import * as historyPage from "@tests/page/customerHistory.page";
import * as history from "@tests/data/customerHistory.data";

describe("Customer History", () => {
  beforeEach(() => {
    // hooks code
    route.visit(ROUTES.login);
  });

  it("Verify that the bank manager is able to view the customer history", () => {
    //test case code in here
    element.get(loginPage.bankManagerLogin);
    element.get(historyPage.customerHistoryButton);

    assert.shouldContainText(historyPage.tdFirstName1, "Hermoine");
  });

  it("Verify that the bank manager is able to search the customer name with valid data", () => {
    //test case code in here
    element.get(loginPage.bankManagerLogin);
    element.get(historyPage.customerHistoryButton);
    element.fillfield(historyPage.searchField, history.VALID_SEARCH_DATA.data);

    assert.shouldContainText(historyPage.searchResult, "Hermoine");
  });

  it("Verify that the bank manager is unable to search the customer name with invalid data", () => {
    //test case code in here
    element.get(loginPage.bankManagerLogin);
    element.get(historyPage.customerHistoryButton);
    element.fillfield(historyPage.searchField, history.INVALID_SEARCH_DATA.data);

    assert.shouldContainText(historyPage.searchResultEmpty, "");
  });

  it("Verify that the bank manager is able to delete the customer", () => {
    //test case code in here
    element.get(loginPage.bankManagerLogin);
    element.get(historyPage.customerHistoryButton);
    element.get(historyPage.deleteButton);

    assert.shouldNotHaveValue(historyPage.tdFirstName1, "Hermoine");
  });

  it("Verify that the bank manager is able to filter customer history based on first-name", () => {
    //test case code in here
    element.get(loginPage.bankManagerLogin);
    element.get(historyPage.customerHistoryButton);
    element.forceGet(historyPage.firstNameFilter);

    assert.shouldContainText(historyPage.resultFirstNameFilter, "Ron");
  });

  it("Verify that the bank manager is able to filter customer history based on last-name", () => {
    //test case code in here
    element.get(loginPage.bankManagerLogin);
    element.get(historyPage.customerHistoryButton);
    element.forceGet(historyPage.lastNameFilter);

    assert.shouldContainText(historyPage.resultLastNameFilter, "Weasly");
  });

  it.only("Verify that the bank manager is able to filter customer history based on post-code", () => {
    //test case code in here
    element.get(loginPage.bankManagerLogin);
    element.get(historyPage.customerHistoryButton);
    element.forceGet(historyPage.postCodeFilter);

    assert.shouldContainText(historyPage.resultPostCodeFilter, "E89898");
  });
});
