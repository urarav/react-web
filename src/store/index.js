import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
import detailReducer from "./modules/detail";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
  },
});

export default store;
