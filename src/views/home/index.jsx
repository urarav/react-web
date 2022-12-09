import HomeBanner from "./c-cpns/home-banner";
import HomeSection from "./c-cpns/home-section";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";
import { isEmpty } from "@/utils";

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } =
    useSelector(
      (state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highScoreInfo: state.home.highScoreInfo,
        discountInfo: state.home.discountInfo,
        recommendInfo: state.home.recommendInfo,
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
        {!isEmpty(goodPriceInfo) && <HomeSection sectionInfo={goodPriceInfo} />}
        {!isEmpty(highScoreInfo) && <HomeSection sectionInfo={highScoreInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
