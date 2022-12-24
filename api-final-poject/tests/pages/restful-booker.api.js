import BaseApi from "$root/pages/base.api";

const RestfulApi = {
  CreateToken: (data) => BaseApi.post("/auth", data),
};

export default RestfulApi;
