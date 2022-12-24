import { assert } from "chai";
import RestfulApi from "$root/pages/restful-booker.api";
import * as data from "$root/data/token.data";

describe("Create Token", () => {
  it("Should return a token when provided with valid login credentials", async () => {
    const response = await RestfulApi.CreateToken(data.VALID_LOGIN);

    assert.equal(response.status, 200);
  });
});
