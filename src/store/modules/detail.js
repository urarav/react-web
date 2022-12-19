import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    roomInfo: {},
  },
  reducers: {
    changeRoomInfo(state, { payload }) {
      state.roomInfo = payload;
    },
  },
});

export const { changeRoomInfo } = detailSlice.actions;
export default detailSlice.reducer;
