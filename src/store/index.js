import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/user";

const reducer = combineReducers({
  user: AuthReducer,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: {
      warnAfter: 128,
    },
  }),
});

export var rootState = store.getState();
export var AppThunk = void 0;
export var AppDispatch = store.dispatch;

export default store;
