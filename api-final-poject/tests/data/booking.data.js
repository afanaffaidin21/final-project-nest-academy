export const BOOKING_ID_1 = {
  firstname: "Sally",
  lastname: "Jones",
  totalprice: 227,
  depositpaid: true,
  bookingdates: {
    checkin: "2015-04-25",
    checkout: "2020-12-11",
  },
  additionalneeds: "Breakfast",
};

export const VALID_BOOKING_DATA = {
  firstname: "Jim",
  lastname: "Brown",
  totalprice: 111,
  depositpaid: true,
  bookingdates: {
    checkin: "2018-01-01",
    checkout: "2019-01-01",
  },
  additionalneeds: "Breakfast",
};

export const INVALID_BOOKING_DATA = {
  firstname: "",
  lastname: "",
  totalprice: 0,
  depositpaid: true,
  bookingdates: {
    checkin: "",
    checkout: "",
  },
  additionalneeds: "",
};
