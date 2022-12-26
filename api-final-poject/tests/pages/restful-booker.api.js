import BaseApi from "../pages/base.api";

const RestfulApi = {
  CreateToken: (data) => BaseApi.post("/auth", data),
  GetBooking: (data) => BaseApi.get("/booking"),
};

export default RestfulApi;
