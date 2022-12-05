import { getGoodPriceInfo, getHighScoreInfo } from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchHomeData",
  async () => await Promise.all([getGoodPriceInfo(), getHighScoreInfo()])
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
  },
  reducers: {},
  extraReducers: {
    [fetchHomeDataAction.fulfilled](
      state,
      { payload: [goodPriceInfo, highScoreInfo] }
    ) {
      state.goodPriceInfo = goodPriceInfo;
      state.highScoreInfo = highScoreInfo;
    },
  },
});

export default homeSlice.reducer;
