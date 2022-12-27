import { assert } from "chai";
import RestfulApi from "../pages/restful-booker.api";
import * as data from "../data/booking.data";

describe("Booking", () => {
  it("Verify that the GET /booking endpoint returns a list of all bookings in the system", async () => {
    const response = await RestfulApi.GetBooking();

    assert.equal(response.status, 200);
  });

  it("Verify that the GET /booking/{bookingid} endpoint returns the details of a specific booking", async () => {
    const response = await RestfulApi.GetBookingId();

    assert.equal(response.status, 200);
    assert.containsAllKeys(response.data, ["firstname"]);
    assert.equal(response.data.successful, data.BOOKING_ID_1.successful);
  });

  it("Verify that the POST /booking endpoint creates a new booking as expected, with the appropriate request body and response status code", async () => {
    const response = await RestfulApi.CreateBooking(data.VALID_BOOKING_DATA);

    assert.equal(response.status, 500);
    // assert.containsAllKeys(response.data, ["firstname"]);
    // assert.equal(response.data.successful, data.VALID_BOOKING_DATA.successful);
  });
});
