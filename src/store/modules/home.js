import {
  getDiscountInfo,
  getGoodPriceInfo,
  getHighScoreInfo,
  getHotRecommendInfo,
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
    ])
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
  },
  reducers: {},
  extraReducers: {
    [fetchHomeDataAction.fulfilled](
      state,
      { payload: [goodPriceInfo, highScoreInfo, discountInfo, recommendInfo] }
    ) {
      state.goodPriceInfo = goodPriceInfo;
      state.highScoreInfo = highScoreInfo;
      state.discountInfo = discountInfo;
      state.recommendInfo = recommendInfo;
    },
  },
});

export default homeSlice.reducer;
