import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
  return <RoomItemWrapper>{props.roomInfo.name}</RoomItemWrapper>;
});

RoomItem.propTypes = {
  roomInfo: PropTypes.object.isRequired,
};

export default RoomItem;
