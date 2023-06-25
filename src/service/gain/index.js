import http from "../http";

export const ListGain = async (data) => {
  return http.get("/gain/all", data);
};

export const CreateGain = async (data) => {
  return http.post("/gain/create", data)
}

export const DeleteGain = async (data) => {
  return http.delete("/gain/delete", data)
}

export const UpdateGain = async (data) => {
  return http.put("/gain/update", data)
}

export const OneGain = async (data) => {
  return http.get("/gain/get", data);
};
