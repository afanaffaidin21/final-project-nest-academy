import * as assert from "@helper/asserts";
import * as element from "@helper/elements";
import * as route from "@helper/route";
import { ROUTES } from "@tests/const/routes";
import * as loginPage from "@tests/page/login.page";
import * as addCustomerPage from "@tests/page/addCustomer.page";
import * as customer from "@tests/data/addCustomer.data";

describe("Add New Customer", () => {
  beforeEach(() => {
    // hooks code
    route.visit(ROUTES.login);
  });

  it("Verify that the bank manager is able to add new customer with valid data", () => {
    //test case code in here
    element.get(loginPage.bankManagerLogin);
    element.get(addCustomerPage.addCustomerButton);
    element.fillfield(addCustomerPage.firstNameField, customer.VALID_CUSTOMER_DATA.firstName);
    element.fillfield(addCustomerPage.lastNameField, customer.VALID_CUSTOMER_DATA.lastName);
    element.fillfield(addCustomerPage.postCodeField, customer.VALID_CUSTOMER_DATA.postCode);
    element.get(addCustomerPage.addCustomerSubmit);

    assert.verifyAlertWindow("Customer added successfully with customer id :6");
  });
});
