import { configureStore } from "@reduxjs/toolkit";
import appModeReducer from "./slices/appMode.slice";
import authReducer from './slices/auth.slice';

const store = configureStore({
  reducer: {
    appMode: appModeReducer,
    auth:authReducer,
  },
});

export default store;
