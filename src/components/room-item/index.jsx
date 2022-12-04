import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const {
    roomInfo: { verify_info, picture_url, name, price },
  } = props;
  return (
    <RoomItemWrapper verifyColor={verify_info?.text_color ?? "#4e4e4e"}>
      <ul className="item">
        <li className="item-img">
          <img src={picture_url} alt=""></img>
        </li>
        <li className="item-desc">{verify_info?.messages?.join("•")}</li>
        <li className="item-name">{name}</li>
        <li className="item-price">¥{price}/晚</li>
      </ul>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  roomInfo: PropTypes.object.isRequired,
};

export default RoomItem;
