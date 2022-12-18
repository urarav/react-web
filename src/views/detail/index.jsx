import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  const { roomInfo } = useSelector(
    (state) => ({
      roomInfo: state.detail.roomInfo,
    }),
    shallowEqual
  );
  return (
    <DetailWrapper>
      {roomInfo.picture_urls?.slice(0, 5)?.map((li) => (
        <li className="item" key={li}>
          <div className="item-mask"></div>
          <img className="item-img" src={li} alt=""></img>
        </li>
      ))}
    </DetailWrapper>
  );
});

export default Detail;
