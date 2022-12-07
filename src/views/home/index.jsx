import HomeBanner from "./c-cpns/home-banner";
import HomeSection from "./c-cpns/home-section";
import React, { memo, useCallback, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import { HomeWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-room";
import SectionTabs from "@/components/section-tabs";
import { useState } from "react";

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
    }),
    shallowEqual
  );

  const { title, subtitle, dest_list, dest_address = [] } = discountInfo;
  const [name, setName] = useState("佛山");
  const tabsInfo = dest_address.map((item) => item.name);
  const handleTabClick = useCallback((name) => setName(name), []);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <SectionHeader title={title} subtitle={subtitle} />
        <SectionTabs tabsInfo={tabsInfo} handleTabClick={handleTabClick} />
        <SectionRoom listInfo={dest_list?.[name]} col="3" />

        <HomeSection sectionInfo={goodPriceInfo} />
        <HomeSection sectionInfo={highScoreInfo} />
      </div>
    </HomeWrapper>
  );
});

export default Home;
