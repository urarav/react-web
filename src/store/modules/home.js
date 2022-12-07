import {
  getDiscountInfo,
  getGoodPriceInfo,
  getHighScoreInfo,
} from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchHomeData",
  async () =>
    await Promise.all([
      getGoodPriceInfo(),
      getHighScoreInfo(),
      getDiscountInfo(),
    ])
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
  },
  reducers: {},
  extraReducers: {
    [fetchHomeDataAction.fulfilled](
      state,
      { payload: [goodPriceInfo, highScoreInfo, discountInfo] }
    ) {
      state.goodPriceInfo = goodPriceInfo;
      state.highScoreInfo = highScoreInfo;
      state.discountInfo = discountInfo;
    },
  },
});

export default homeSlice.reducer;
