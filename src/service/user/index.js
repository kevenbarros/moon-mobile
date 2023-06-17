import http from "../http";

export const CheckUser = async (data) => {
  return http.post("/user/check", data);
};

export const RegisterUser = async (data) => {
  return http.post("/user/register", data);
};

export const LoginUser = async (data) => {
  return http.post("/user/login", data)
}

export const UserAll = async () => {
  return http.get("/user/getall")
}
