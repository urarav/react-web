import RoomItem from "@/components/room-item";
import SectionHeader from "@/components/section-header";
import { fetchHomeDataAction } from "@/store/modules/home";
import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeBanner from "./c-cpns/home-banner";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        <section className="content-header">
          <SectionHeader title={goodPriceInfo.title} />
        </section>
        <ul className="content-list">
          {goodPriceInfo.list?.slice(0, 8).map((li) => (
            <RoomItem key={li.id} roomInfo={li} />
          ))}
        </ul>
      </div>
    </HomeWrapper>
  );
});

export default Home;
