import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    isFixed: false,
  },
  reducers: {
    changeIsFixedAction(state, { payload }) {
      state.isFixed = payload;
    },
  },
});

export const { changeIsFixedAction } = mainSlice.actions;
export default mainSlice.reducer;
