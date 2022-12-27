import { assert } from "chai";
import RestfulApi from "../pages/restful-booker.api";
import * as data from "../data/token.data";

describe("Create Token", () => {
  it("Verify that the POST /auth endpoint returns a token when provided with valid login credentials", async () => {
    const response = await RestfulApi.CreateToken(data.VALID_LOGIN);

    assert.equal(response.status, 200);
  });

  it("Verify that the POST /auth endpoint returns an error when provided with invalid username and password", async () => {
    const response = await RestfulApi.CreateToken(
      data.INVALID_USERNAME_PASSWORD
    );

    assert.equal(response.status, 200);
    assert.containsAllKeys(response.data, ["reason"]);
    // assert.isString(response.data.error);
    assert.equal(response.data.error, data.ERROR_INVALID_LOGIN.error);
  });

  it("Verify that the POST /auth endpoint returns an error when provided with invalid username", async () => {
    const response = await RestfulApi.CreateToken(data.INVALID_USERNAME);

    assert.equal(response.status, 200);
    assert.containsAllKeys(response.data, ["reason"]);
    // assert.isString(response.data.error);
    assert.equal(response.data.error, data.ERROR_INVALID_LOGIN.error);
  });

  it("Verify that the POST /auth endpoint returns an error when provided with invalid password", async () => {
    const response = await RestfulApi.CreateToken(data.INVALID_PASSWORD);

    assert.equal(response.status, 200);
    assert.containsAllKeys(response.data, ["reason"]);
    // assert.isString(response.data.error);
    assert.equal(response.data.error, data.ERROR_INVALID_LOGIN.error);
  });
});
