import http from "../http";

export const ListExpense = async (data) => {
  return http.post("/expense/all", data);
};

export const CreateNewExpense = async (data) => {
  return http.post("/expense/create", data)
}
