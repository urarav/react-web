import RoomItem from "@/components/room-item";
import { changeRoomInfo } from "@/store/modules/detail";
import React, { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EntireMainWrapper } from "./style";

const EntireMain = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading,
    }),
    shallowEqual
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (roomInfo) => {
      dispatch(changeRoomInfo(roomInfo));
      navigate("/detail");
    },
    [dispatch, navigate]
  );
  return (
    <EntireMainWrapper>
      <h3 className="title">{totalCount}家住宿</h3>
      <ul className="list">
        {roomList?.map((li) => (
          <RoomItem
            handleClick={handleClick}
            key={li._id}
            col={5}
            roomInfo={li}
          />
        ))}
      </ul>
      {isLoading && <section className="is-empty__mask"></section>}
    </EntireMainWrapper>
  );
});

export default EntireMain;
