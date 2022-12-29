import { assert } from "chai";
import RestfulApi from "../pages/restful-booker.api";

describe("Ping Check", () => {
  it("Verify that the GET /ping endpoint to confirm whether the API is up and running", async () => {
    const response = await RestfulApi.GetPingCheck();

    assert.equal(response.status, 201);
  });
});
