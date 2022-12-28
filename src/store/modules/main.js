import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    isFixed: false,
    isSearch: false,
  },
  reducers: {
    changeIsFixedAction(state, { payload }) {
      state.isFixed = payload;
    },
    changeIsSearchAction(state, { payload }) {
      state.isSearch = payload;
    },
  },
});

export const { changeIsFixedAction, changeIsSearchAction } = mainSlice.actions;
export default mainSlice.reducer;
