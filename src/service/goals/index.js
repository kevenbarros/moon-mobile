import http from "../http";

export const ListGoals = async (data) => {
  return http.get("/gain/all", data);
};
