import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useSelector } from "react-redux";

function interceptorsRequestError(error) {
  const erro = error;
  erro.response.body = error.response.error;
  delete erro.response.error;

  return erro.response;

}

async function interceptorsRequestConfig(config) {
  const token = await AsyncStorage.getItem('@token')
  const conf = config;
  if (token) {
    conf.headers.token = `${token}`;
  }
  return conf;
}

function interceptorsResponseConfig(response) {
  const resp = response;
  // resp.body = resp.data;
  // delete resp.data;
  return resp;
}

function interceptorsResponseError(error) {
  let erro = {};
  if (error.response) {
    erro = {
      body: error.response.data,
    };
  } else {
    erro = {
      body: {
        success: false,
        data: "Network error",
      },
      teste: error
    };
  }
  return erro;
}
const baseUrl = "http://fc6d-2804-14c-598f-9548-28b2-383-2004-b10c.ngrok-free.app/" //"https://backend-moon-2.vercel.app/";
const api = axios.create({
  baseURL: baseUrl,
});

api.interceptors.request.use(
  interceptorsRequestConfig,
  interceptorsRequestError
);

api.interceptors.response.use(
  interceptorsResponseConfig,
  interceptorsResponseError
);

export default api;
