import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckUser, LoginUser, RegisterUser } from "../../service/user";
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
  loading: false,
  token: "",
  token_google: "",
  user: {
    email: "",
    picture: "https://img.freepik.com/vetores-gratis/astronauta-bonito-montando-foguete-e-acenando-a-mao-dos-desenhos-animados-icone-ilustracao-conceito-de-icone-de-tecnologia-cientifica_138676-2130.jpg?w=2000",
    name: "",
    id_google: "",
    locale: "",
    given_name: "",
    family_name: ""
  }
};

const userStoreSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload
    },
    setToken_google: (state, { payload }) => {
      state.token_google = payload
    },
    setToken: (state, { payload }) => {
      state.token = payload
    },
  },
});
export const tokenGoogleAuth = (token) =>
  async (dispatch, getState) => {
    const { setUser, setLoading, user, setToken_google } = userStoreSlice.actions;
    const state = getState();
    const { token_google } = state.user;
    dispatch(setToken_google(token))
  }


export const fetchUsers = (token, cb) =>
  async (dispatch, getState) => {
    const { setUser, setLoading, setToken } = userStoreSlice.actions;
    try {
      dispatch(setLoading(true))
      const responseDataUser = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`)
      const userInfo = await responseDataUser.json()
      const objectUser = {
        email: userInfo.email,
        picture: userInfo.picture,
        name: userInfo.name,
        id_google: userInfo.id,
        locale: userInfo.locale,
        given_name: userInfo.given_name,
        family_name: userInfo.family_name
      }
      dispatch(setUser(objectUser));

      const checkUserBack = await CheckUser({ id_google: objectUser.id_google })
      console.log(checkUserBack, "checkUserBack")
      if (!checkUserBack.data.checkUser) {
        //register
        console.log("register")
        const register = await RegisterUser(objectUser)
        dispatch(setLoading(false))
        cb()
      } else {
        //login
        console.log("login")
        const login = await LoginUser({ id_google: objectUser.id_google })
        if (login.data.token) {
          dispatch(setUser(login.data.person))
          dispatch(setToken(login.data.token))
          await AsyncStorage.setItem('@token', login.data.token)
          await AsyncStorage.setItem('@token_google', token)
        }
        dispatch(setLoading(false))
        cb()
      }
    } catch {
      console.log("ctach")
      dispatch(setLoading(false))
      cb()
    } finally {
      // cb()
    }
  };


export const { setUser, setLoading, setToken, setToken_google } = userStoreSlice.actions;

export default userStoreSlice.reducer;
