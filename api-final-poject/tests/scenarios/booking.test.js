import { assert } from "chai";
import RestfulApi from "../pages/restful-booker.api";

describe("Make Booking", () => {
  it("Verify that the GET /booking endpoint returns a list of all bookings in the system", async () => {
    const response = await RestfulApi.GetBooking();

    assert.equal(response.status, 200);
  });
});
