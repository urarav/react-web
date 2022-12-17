import RoomItem from "@/components/room-item";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import { EntireMainWrapper } from "./style";

const EntireMain = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading,
  }));
  return (
    <EntireMainWrapper>
      <h3 className="title">{totalCount}家住宿</h3>
      <ul className="list">
        {roomList.map((li) => (
          <RoomItem key={li._id} col={5} roomInfo={li} />
        ))}
      </ul>
      {isLoading && <section className="is-empty__mask"></section>}
    </EntireMainWrapper>
  );
});

export default EntireMain;
