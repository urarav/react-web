import HomeBanner from "./c-cpns/home-banner";
import HomeSection from "./c-cpns/home-section";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";
import { isEmpty } from "@/utils";
import HomeGallery from "./c-cpns/home-gallery";
import {
  changeIsFixedAction,
  changeIsTopAlphaAction,
} from "@/store/modules/main";

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
    dispatch(changeIsFixedAction(true));
    dispatch(changeIsTopAlphaAction(true));
  }, [dispatch]);

  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longForInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {!isEmpty(discountInfo) && (
          <HomeSection sectionInfo={discountInfo} layout_flag={true} />
        )}
        {!isEmpty(recommendInfo) && (
          <HomeSection sectionInfo={recommendInfo} layout_flag={true} />
        )}
        {!isEmpty(longForInfo) && (
          <HomeGallery layout_flag={true} sectionInfo={longForInfo} />
        )}
        {!isEmpty(goodPriceInfo) && <HomeSection sectionInfo={goodPriceInfo} />}
        {!isEmpty(highScoreInfo) && <HomeSection sectionInfo={highScoreInfo} />}
        {!isEmpty(plusInfo) && <HomeGallery sectionInfo={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
