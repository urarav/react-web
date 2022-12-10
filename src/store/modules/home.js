import {
  getDiscountInfo,
  getLongForInfo,
  getGoodPriceInfo,
  getHighScoreInfo,
  getHotRecommendInfo,
  getPlusInfo,
} from "@/services/modules/home";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchHomeData",
  async () =>
    await Promise.all([
      getGoodPriceInfo(),
      getHighScoreInfo(),
      getDiscountInfo(),
      getHotRecommendInfo(),
      getLongForInfo(),
      getPlusInfo(),
    ])
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longForInfo: {},
    plusInfo: {},
  },
  reducers: {},
  extraReducers: {
    [fetchHomeDataAction.fulfilled](
      state,
      {
        payload: [
          goodPriceInfo,
          highScoreInfo,
          discountInfo,
          recommendInfo,
          longForInfo,
          plusInfo,
        ],
      }
    ) {
      state.goodPriceInfo = goodPriceInfo;
      state.highScoreInfo = highScoreInfo;
      state.discountInfo = discountInfo;
      state.recommendInfo = recommendInfo;
      state.longForInfo = longForInfo;
      state.plusInfo = plusInfo;
    },
  },
});

export default homeSlice.reducer;
