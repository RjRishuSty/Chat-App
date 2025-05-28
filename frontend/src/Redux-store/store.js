import { configureStore } from "@reduxjs/toolkit";
import appModeReducer from "./slices/appMode.slice";

const store = configureStore({
  reducer: {
    appMode: appModeReducer,
  },
});

export default store;
