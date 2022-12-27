import BaseApi from "../pages/base.api";

const RestfulApi = {
  CreateToken: (data) => BaseApi.post("/auth", data),
  GetBooking: (data) => BaseApi.get("/booking"),
  GetBookingId: (data) => BaseApi.get("/booking/1"),
  CreateBooking: (data) => BaseApi.post("/booking", data),
  GetPingCheck: (data) => BaseApi.get("/ping"),
};

export default RestfulApi;
