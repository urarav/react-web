import PropTypes from "prop-types";
import RoomItem from "../room-item";
import React, { memo } from "react";
import { SectionRoomWrapper } from "./style";

const SectionRoom = memo((props) => {
  const { listInfo } = props;
  return (
    <SectionRoomWrapper>
      {listInfo?.slice(0, 8).map((li) => (
        <RoomItem key={li.id} roomInfo={li} />
      ))}
    </SectionRoomWrapper>
  );
});

SectionRoom.propTypes = {
  listInfo: PropTypes.array.isRequired,
};

export default SectionRoom;
