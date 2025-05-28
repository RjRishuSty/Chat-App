import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appMode: "light",
};

const appModeSlice = createSlice({
  name: "appMode",
  initialState,
  reducers: {
    toggleAppMode: (state) => {
      state.appMode = state.appMode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleAppMode } = appModeSlice.actions;
export default appModeSlice.reducer;
