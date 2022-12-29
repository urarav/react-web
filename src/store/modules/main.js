import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    isFixed: false,
    isTopAlpha: false,
  },
  reducers: {
    changeIsFixedAction(state, { payload }) {
      state.isFixed = payload;
    },
    changeIsTopAlphaAction(state, { payload }) {
      state.isTopAlpha = payload;
    },
  },
});

export const { changeIsFixedAction, changeIsTopAlphaAction } =
  mainSlice.actions;
export default mainSlice.reducer;
