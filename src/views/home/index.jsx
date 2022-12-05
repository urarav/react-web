import HomeBanner from "./c-cpns/home-banner";
import HomeSection from "./c-cpns/home-section";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  const { goodPriceInfo, highScoreInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
    }),
    shallowEqual
  );
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <HomeSection sectionInfo={goodPriceInfo} />
        <HomeSection sectionInfo={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
