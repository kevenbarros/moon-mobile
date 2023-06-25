import http from "../http";

export const ListGeneral = async (data) => {
  return http.post("/generalList/all", data);
};


