import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: null,
  isAuthorised:false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { checkAuth } = authSlice.actions;
export default authSlice.reducer;
